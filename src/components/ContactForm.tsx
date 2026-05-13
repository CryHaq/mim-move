"use client";

import { useActionState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/iletisim/actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray bg-white font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all";
const errorInputClass =
  "w-full px-4 py-3 rounded-xl border border-red-300 bg-red-50/30 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400 transition-all";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-heading font-bold text-xl text-navy mb-3">
          Mesajınız Gönderildi!
        </h3>
        <p className="text-navy/60 font-body text-sm max-w-sm">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="font-heading font-bold text-xl text-navy mb-2">
        İletişim Formu
      </h3>
      <p className="text-navy/50 font-body text-sm mb-8">
        Formu doldurun, size en kısa sürede dönüş yapalım.
      </p>

      {state.message && !state.success && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm font-body px-4 py-3 rounded-xl mb-5">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium font-body text-navy/70 mb-1.5">
              Ad Soyad *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Adınız Soyadınız"
              className={state.errors?.name ? errorInputClass : inputClass}
            />
            {state.errors?.name && (
              <p className="text-red-500 text-xs font-body mt-1.5">{state.errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium font-body text-navy/70 mb-1.5">
              Telefon *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+90 5XX XXX XX XX"
              className={state.errors?.phone ? errorInputClass : inputClass}
            />
            {state.errors?.phone && (
              <p className="text-red-500 text-xs font-body mt-1.5">{state.errors.phone}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium font-body text-navy/70 mb-1.5">
            Firma Adı
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Firma adınız"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium font-body text-navy/70 mb-1.5">
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email@firma.com"
            className={state.errors?.email ? errorInputClass : inputClass}
          />
          {state.errors?.email && (
            <p className="text-red-500 text-xs font-body mt-1.5">{state.errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium font-body text-navy/70 mb-1.5">
            Mesajınız *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Projeniz hakkında kısaca bilgi verin..."
            className={`${state.errors?.message ? errorInputClass : inputClass} resize-none`}
          />
          {state.errors?.message && (
            <p className="text-red-500 text-xs font-body mt-1.5">{state.errors.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="projectLink" className="block text-sm font-medium font-body text-navy/70 mb-1.5">
            Proje Dosyası / Drive Linki (isteğe bağlı)
          </label>
          <input
            id="projectLink"
            name="projectLink"
            type="url"
            placeholder="Google Drive veya dosya linki"
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-orange hover:bg-orange-dark text-white font-semibold font-body py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-orange/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {pending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Gönderiliyor...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Mesaj Gönder
            </>
          )}
        </button>
      </form>
    </>
  );
}
