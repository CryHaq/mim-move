"use server";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
  };
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const projectLink = formData.get("projectLink") as string;

  // Server-side validation
  const errors: ContactFormState["errors"] = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Ad soyad en az 2 karakter olmalıdır.";
  }

  if (!phone || phone.trim().length < 10) {
    errors.phone = "Geçerli bir telefon numarası giriniz.";
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Geçerli bir e-posta adresi giriniz.";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "Mesajınız en az 10 karakter olmalıdır.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "", errors };
  }

  // TODO: Gerçek e-posta servisi entegrasyonu (Resend, SendGrid vb.)
  // Örnek:
  // await resend.emails.send({
  //   from: 'MIM+MOVE <noreply@mimove.com.tr>',
  //   to: 'info@mimove.com.tr',
  //   subject: `Yeni İletişim: ${name}`,
  //   html: `<p><strong>Ad:</strong> ${name}</p>...`,
  // });

  console.log("Yeni iletişim formu:", { name, phone, company, email, message, projectLink });

  return {
    success: true,
    message: "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
  };
}
