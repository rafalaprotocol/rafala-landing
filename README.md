# 🌀 Rafala.xyz — Landing Page

**Rafala** is a fully decentralized protocol for future privacy-compliant DeFi, identity and transactions.  
It is composed of multiple permissionless apps built around trustless interoperability, quantum-resistant cryptography, and zkPrivacy — all while keeping the door open for regulatory compliance.

---

## 🔱 Rafala Subdomains

| Subdomain             | Purpose |
|-----------------------|---------|
| `pay.rafala.xyz`      | Multichain USDC merchant payments (via CCTP V2) with zkPrivacy and optional compliance fallback |
| `app.rafala.xyz`      | Future Rafala DeFi interface, staking, DAO, token interactions, yield modules |
| `identity.rafala.xyz` | Rafala ZK Identity layer (planned), interoperable with Lit Protocol, Semaphore, or Sismo |

---

## 🚀 What is Rafala?

**Rafala** is a protocol designed to power **private, cross-chain, quantum-resilient USDC payments** and future DeFi identity.  
Our architecture avoids all centralized databases or backends. Every interaction is cryptographically signed, privacy-enabled, and verifiable on decentralized rails.

We are building this protocol as part of the **Circle Multichain USDC Hackathon**, but with long-term vision and real-world adoption in mind.

---

## ⚙️ Key Features

- ✅ **Multichain Payments**: Powered by Circle CCTP V2 across supported chains (Arbitrum, Base, Linea, etc.)
- 🛡 **zkProof Support**: Protect sender identity with zero-knowledge proofs (via Semaphore or Noir)
- 🔐 **Quantum-Safe Ready**: Dilithium-signed proofs and metadata to ensure resistance to future quantum attacks
- 🌍 **Decentralized**: No database, no backend — just smart clients, wallets, IPFS and smart contracts
- ⚖️ **Compliance-Aware Privacy**: Emergency MPC or Lit Protocol access paths for auditability (opt-in)
- 💡 **Composable**: Rafala is modular and designed to power future identity and DAO modules
- 🛠 **Built for Developers**: Clean structure, verifiable logic, no vendor lock-in

---

## 📦 Products

### 1. `pay.rafala.xyz`
> Accept USDC across chains, fast and private.

- Merchants publish preferences to IPFS (e.g., accepted tokens, chains)
- Customers use wallet to pay via CCTP Fast Transfer
- ZK Proofs ensure privacy for customers
- Optional compliance recovery layer (e.g., view key, MPC quorum)
- Quantum-safe metadata signing (Dilithium)

### 2. `app.rafala.xyz` *(coming soon)*
> Rafala's DeFi layer — with its own stablecoins (multi-currency pegged)

- Staking, liquidity incentives
- DAO modules and community governance
- Interchain token routing + analytics

### 3. `identity.rafala.xyz` *(planned)*
> Rafala ZK Identity Hub.

- Create self-sovereign identity
- Plug into Rafala Pay, DeFi or third-party dApps
- Powered by Semaphore, Lit Protocol, or Sismo

---

## 🎯 Why Use Rafala?

| Benefit                         | Description |
|----------------------------------|-------------|
| 💳 Accept USDC anywhere         | One system for cross-chain USDC |
| 👁 Protect user privacy         | zk-proofs hide sensitive data |
| 🛰 Future-ready                 | Quantum-resilient architecture |
| ⚖️ Compliant if needed         | Optional regulator access |
| 🌐 Fully decentralized          | Wallet-based auth, IPFS storage, zero servers |
| 🔌 Easy to integrate            | Simple SDKs and drop-in frontend widgets (coming soon) |

---

## 🧠 Philosophy

> Rafala is not just a payment tool.  
> It’s a **privacy-first modular protocol** that allows you to interact, earn, build and transact across Web3 — without giving up freedom *or* compliance.

---

## 👷‍♂️ Built With

- [Circle CCTP V2](https://developers.circle.com)
- [ethers.js / viem](https://viem.sh/)
- [React + Tailwind](https://tailwindcss.com)
- [IPFS](https://ipfs.tech)
- [Semaphore / Noir](https://noir-lang.org)
- [Dilithium (PQClean)](https://github.com/PQClean/PQClean)
- [Lit Protocol](https://litprotocol.com)

---

## 🧪 Status

- ✅ `pay.rafala.xyz`: in MVP stage
- 🛠 `app.rafala.xyz`: under development
- 🧬 `identity.rafala.xyz`: planning phase

---

## 📫 Join Us

- LinkedIn: [rafala](https://linkedin.com/company/rafala)
- GitHub: [rafalaprotocol](https://github.com/rafalaprotocol)
- Twitter: [@rafalaxyz](https://x.com/rafalaxyz)

---

Rafala — *decentralized rails for compliant privacy.*

# 🎨 Rafala.xyz — Landing Page Design Guideline

A full design guide for building the **landing page of Rafala.xyz** using our decentralized, compliance-aware, privacy-first vision.

---

## 🚀 Rafala at a Glance

**Rafala** is a decentralized protocol suite enabling multichain USDC payments with embedded privacy and quantum resistance, while offering optional compliance tools. It is designed to power the next generation of Web3 financial and identity infrastructure — fully user-sovereign, modular, and future-resilient.

The landing page at `rafala.xyz` is the front door into the Rafala ecosystem.

---

## 🧱 Project Structure

| Subdomain             | Description |
|-----------------------|-------------|
| `rafala.xyz`          | Main landing site — protocol vision, products, benefits |
| `pay.rafala.xyz`      | Payment system using CCTP V2 + zkProofs |
| `app.rafala.xyz`      | DeFi interface (staking, governance, token) — coming soon |
| `identity.rafala.xyz` | Future ZK identity layer (planned) |

---

## 🧠 Design Philosophy

> "**Disruption meets credibility**"

The landing page must reflect Rafala’s:
- Technical elegance
- Clean modular architecture
- Sovereignty-first tone
- Trust-through-verifiability mindset

Inspiration: StarkNet, Aztec, zkSync, Stripe, EigenLayer

---

## 🧩 Stack

- ⚛️ React (Vite)
- 🎨 TailwindCSS
- 🧠 Fonts: Space Grotesk (titles), Inter (body)
- 🖤 Theme: Elegant Disruptor (dark, soft, futuristic)
- 🎯 Hosting: Vercel

---

## 🎨 Color Palette

| Name          | Hex      | Use |
|---------------|----------|-----|
| Noir Nebula   | #0F0F0F  | Background |
| Glacier White | #F1F1F1  | Text |
| Graphite Grey | #1C1C1E  | Cards, input BG |
| Rust Gold     | #C08A2D  | CTA buttons |
| Steel Blue    | #3A4F63  | Subtext accents |
| Muted Rose    | #AD6A6A  | Disclaimers, emotional cues |

---

## 🧩 Suggested Section Structure

### 1. Hero Section
- Full screen height
- Left-aligned text
- Tagline: `Decentralized rails for compliant privacy.`
- CTA: `Explore Rafala` (Rust Gold button)
- Minimal animation (shader / abstract background glow)

### 2. What is Rafala?
- 2-column layout (text + graphic)
- Copy:
> Rafala is a fully decentralized protocol built for multichain USDC payments, embedded privacy via ZK, and quantum-resistant security — all with optional compliance hooks to ensure it won’t be shut down. It’s censorship-resistant by default, compliance-enabled by choice.

---

## 🔑 Why Rafala?

| Feature                | Why It Matters |
|------------------------|----------------|
| 🧬 Multichain USDC     | Accept payments on any chain CCTP supports |
| 🔐 zkProofs            | Hide sender, amount, or logic using verifiable math |
| 🧠 Quantum Resistance  | Prepare now for post-quantum security needs |
| 🧾 Optional Compliance | View key or MPC for emergency auditability |
| 🌐 Fully Decentralized | No backend, no servers, just code + cryptography |
| 🔌 Easy to Integrate   | Modular SDKs, future plugins for DeFi and Identity |
| 🛡 Privacy + Trust     | Built ethically, not for laundering — real use cases |

---

## 🧠 Rafala Benefits

- 🧑‍💼 For Merchants:
  - Accept cross-chain USDC with full control
  - Set up once, receive everywhere
  - Preserve privacy and protect customer data

- 🧑‍💻 For Developers:
  - Build composable financial tools using Rafala’s zk-ready payment rails
  - Use IPFS, smart contracts, and wallet auth with no centralized API

- 🧑‍⚖️ For Auditors/Compliance:
  - Access transactions if conditions are met (e.g., multi-party approval or Lit-based conditional access)

- 🧑‍🤝‍🧑 For Users:
  - Make payments that don’t track your identity across chains
  - Enjoy control over your data, without needing to trust any server

---

## 🔄 Future-Proof by Design

- Modular architecture enables:
  - Pluggable ZK identity layer
  - DAO integration
  - DeFi staking/revenue
  - Native stablecoin rails
- Post-quantum cryptography avoids future obsolescence

---

## 🖼 Visual Style

- Bold, space-efficient sections
- Transparent cards (`bg-[#1C1C1E]`) with `rounded-2xl` and soft shadows
- Smooth Framer Motion animations
- No cheesy 3D, no gradient overload — subtle ambient cues only
- UI elements should reflect **authority without arrogance**

---

## 🧬 Footer

- Minimal, monochrome
- Links:
  - GitHub
  - Contact
  - Docs (if available)
  - Community (X/Twitter, Discord - optional)
- Disclaimer in `Muted Rose`

---

## 📫 CTA

End the page with:
> “Join the future of decentralized privacy.”

Button group:
- Get started
- View on GitHub
- Follow development

---

## ✅ Final Notes for Codex

- Stick to one concept per section
- Avoid visual clutter
- Use transitions to *reveal meaning*, not motion for its own sake
- Consistency beats complexity
- Think modular, build for permanence

---

Rafala isn’t just a protocol.  
It’s an ideology — privacy as infrastructure, decentralization as guarantee.
