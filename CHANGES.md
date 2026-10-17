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

## 17 October 2026, later: logo

- `public/edennx-mark.png`, `edennx-logo.png`, `edennx-logo-dark.png`, favicons: the mark's opaque white backing tile removed so the logo is transparent on any page colour (`clean-mark.py` is in EdenNX's design record, not here).

## 17 October 2026, later: sign-in and home pages (view and asset changes only)

- Signed-out `/` redirects to sign-in (`dashboard_controller.rb`); `pages/landing` is no longer rendered. Sign-in is one
  centred card (`devise/sessions/new`); page title "Sign in · EdenNX Sign".
- Navbar (`shared/_navbar`): white bar, EdenNX lockup, Templates and Sent tabs, avatar menu without the Console and
  Ask AI links; the "Upgrade" and GitHub links on settings pages are removed.
- Templates page (`templates_dashboard/index`, `templates/_template`, `_upload_button`, `_dropzone`,
  `template_folders/_folder`): "Templates" heading, one "New template" button, card grid, a Send action and a menu on
  each card, an empty state in place of the permanent dropzone, the tour box removed.
- `shared/_edennx_lockup` (mark plus text wordmark) used wherever the logo shows; `public/edennx-logo.png` removed;
  SVG and PNG lockups added for e-mail. DM Sans self-hosted in `public/fonts/` (SIL OFL, licence included) and
  declared in `shared/_fonts`; theme colours and font family in `tailwind.config.js`.
- Unchanged: signing, storage, audit and certificate code, `LICENSE`, `LICENSE_ADDITIONAL_TERMS`, the DocuSeal
  attribution and the source link.

