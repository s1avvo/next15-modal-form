# Modern Form with Modal in Next.js 15

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3-blue?logo=next.js&logoColor=white" alt="Next.js 15.3" />
  <img src="https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.4-3178c6?logo=typescript&logoColor=white" alt="TypeScript 5.4" />
  <img src="https://img.shields.io/badge/shadcn--ui-%20-purple?logo=vercel&logoColor=white" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/Parallel%20Routes-%E2%9C%94%EF%B8%8F-brightgreen" alt="Parallel Routes" />
  <img src="https://img.shields.io/badge/Intercepted%20Routes-%E2%9C%94%EF%B8%8F-brightgreen" alt="Intercepted Routes" />
</p>

---

## 🔥 This project shows how to display a form inside a modal using:

- **Modern Form Handling** — built with `useActionState`, `zod` validation, and server actions.
- **Parallel Routes** (`@modal`) and **Intercepted Routes** (`(.)form`).
- **Next.js 15.3 hooks**:
  - `onNavigate`
  - `useLinkStatus`
- **Global modal state** — managed with React Context for full control.
- **shadcn/ui Drawer** — beautiful, clean, and minimal modal component.

---

## 📂 Project Structure

```bash
.
├── app/
│   ├── @modal/
│   │   └── (.)form/[slug]/page.tsx # Dynamic Intercepted route: Form inside a modal
│   ├── form/[slug]
│   │   └── page.tsx                # Regular form page (without modal)
│   ├── actions.tsx                 # Server action to handle forms submission
│   ├── layout.tsx                  # Root layout with modal slot
│   └── page.tsx                    # Home page with ModalLink
├── ui/
│   ├── modal-drawer.tsx            # Modal wrapper using shadcn/ui Drawer
│   ├── modal-link.tsx              # Link component using onNavigate to open modal
│   ├── modal-button.tsx            # Button with loading state via useLinkStatus
│   ├── form-message.tsx            # Message Form component
│   └── form-user.tsx               # User Form component
├── context/
│   └── form-modal.tsx              # Global modal state (open / close)
```
