# Changes from upstream DocuSeal 3.3.2

Modified by EdenNX on 17 October 2026 (AGPL-3.0 section 5(a) notice). Branding only; no feature, licence,
signing, storage or Pro/enterprise code changed.

- `public/`: EdenNX mark (`edennx-mark.png`), lockup (`edennx-logo.png`), favicons and app icons, `favicon.svg`, `logo.svg`.
- `app/views/shared/_logo.html.erb`: shows the EdenNX mark instead of the DocuSeal one.
- `lib/docuseal.rb`: adds `BRAND_NAME` ("EdenNX Sign") and `SOURCE_URL`. `PRODUCT_NAME` stays "DocuSeal".
- Headers, share-link page, PWA manifest, page titles, password-reset and invitation emails: product name reads
  "EdenNX Sign" (`submit_form/_docuseal_logo`, `templates_share_link_qr/_logo`, `pwa/manifest.json`,
  `shared/_meta`, `shared/_title`, `shared/_html_title`, `layouts/_head_tags`, `start_form/_docuseal_logo`, `pages/landing`, `devise/mailer/reset_password_instructions`, `invitations/edit`, `user_mailer.rb`).
- `tailwind.config.js`: theme colours `primary`, `neutral`, `base-content`.
- `shared/_powered_by` and `shared/_email_attribution`: the DocuSeal attribution is kept; a line "EdenNX Sign -
  Source code" linking to this repository is added.
- `NOTICE`, `CHANGES.md`: added.

Not changed: `LICENSE`, `LICENSE_ADDITIONAL_TERMS`, PDF creator metadata, the audit certificate, the signing
flow, any `Docuseal.product_name` call that identifies the software. Email bodies are the account's own templates,
edited in the application's settings, not in source.
