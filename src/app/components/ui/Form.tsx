'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FormField } from '@/types/form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type FormProps = {
  fields: FormField[];
  submitLabel: string;
  showForgotButton?: boolean;
  onSubmit: (data: Record<string, string>) => void;
};

export default function Form({
  fields,
  submitLabel,
  showForgotButton = false,
  onSubmit,
}: FormProps) {
  const [visiblePasswords, setVisiblePasswords] = useState<
    Record<string, boolean>
  >({});

  const router = useRouter();

  function togglePassword(name: string) {
    setVisiblePasswords((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    onSubmit(data);

    router.push('/');
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        {fields.map((field) => {
          const isPassword = field.type === 'password';
          const isVisible = visiblePasswords[field.name];

          return (
            <div key={field.name} className="flex flex-col gap-4 w-full">
              <label
                htmlFor={field.name}
                className="text-sm sm:text-base"
              >
                {field.label}
              </label>

              <div className="relative">
                <input
                  id={field.name}
                  name={field.name}
                  type={isPassword && isVisible ? 'text' : field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="
                  w-full
                  rounded-2xl
                  border-input
                  px-3
                  py-2
                  sm:py-2.5
                  text-sm
                  sm:text-base
                  pr-10
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary
                "
                />

                {isPassword && (
                  <button
                    type="button"
                    onClick={() => togglePassword(field.name)}
                    className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    hover:text-primary
                    transition
                  "
                    aria-label={isVisible ? 'Hide password' : 'Show password'}
                  >
                    {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                )}
              </div>
            </div>
          );
        })}

        <button
          type="submit"
          className="
          mt-2
          w-full
          rounded
          bg-primary
          py-2.5
          sm:py-3
          text-on-primary
          font-medium
          transition
          hover:opacity-90
          active:scale-[0.98]
        "
        >
          {submitLabel}
        </button>
      </form>

      {showForgotButton && (
        <Link
          href="/forgot-password"
          className="max-w-1/2 font-medium border-b border-current text-foreground 
          hover:text-primary hover:border-primary transition-colors duration-200"
        >
          Esqueceu sua senha?
        </Link>
      )}
    </div>
  );
}
