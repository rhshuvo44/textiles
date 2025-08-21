"use client";

import { contactInfo } from "@/db/data";

type Props = {
  variant?: "simple" | "withIcon";
};

const ContactList = ({ variant = "simple" }: Props) => {
  return (
    <div className="space-y-4">
      {contactInfo.map(({ id, label, value, icon: Icon, type }) => (
        <div key={id}>
          {variant === "simple" ? (
            // ✅ Simple footer style
            <p>
              {label}:{" "}
              {Array.isArray(value) ? (
                value.map((v) =>
                  type === "phone" ? (
                    <a
                      key={v}
                      href={`tel:${v}`}
                      className="block hover:text-primary transition-colors"
                    >
                      {v}
                    </a>
                  ) : (
                    <span key={v} className="block">
                      {v}
                    </span>
                  )
                )
              ) : type === "email" ? (
                <a
                  href={`mailto:${value}`}
                  className="block hover:text-primary transition-colors"
                >
                  {value}
                </a>
              ) : (
                <span className="block">{value}</span>
              )}
            </p>
          ) : (
            // ✅ Fancy icon version
            <div className="flex items-start gap-4">
              <Icon className="text-primary w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">{label}</h4>
                {Array.isArray(value) ? (
                  value.map((v) =>
                    type === "phone" ? (
                      <a key={v} href={`tel:${v}`} className="block">
                        {v}
                      </a>
                    ) : (
                      <p key={v}>{v}</p>
                    )
                  )
                ) : type === "email" ? (
                  <a href={`mailto:${value}`} className="block">
                    {value}
                  </a>
                ) : (
                  <p>{value}</p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
