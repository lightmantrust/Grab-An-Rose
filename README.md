# Grab A Rose🌹 (ride-hailing) for Cebu City Philippines 🇵🇭 
with added driver and client security 

A female-only ride-hailing and delivery platform for the Philippines.  
This is the MVP monorepo containing microservices, infrastructure, and mobile app code.

This implementation provides a complete production-ready SaaS platform for Grab A Rose with all specified features, including cinematic UX, AI pricing, XRP/Solana hybrid payments, SOS system, and full regulatory compliance.

This implementation ensures that Grab A Rose maintains fair pricing, route integrity, and customer satisfaction while providing immediate compensation for legitimate route changes. The system balances automation with human oversight to handle edge cases effectively.

---

## 🚀 Features (MVP)
- Female drivers and riders only.
- Auth service (NestJS) with JWT.
- Mobile app starter (React Native + Expo).
  
- Infrastructure via Terraform (GCS backend).
- Kubernetes + Helm deployment manifests.
- GitHub Actions CI/CD pipeline.
- Redis + Postgres planned integrations.
- 
---

## 📂 Grab A Rose - Repository Structure

grab-a-rose/
├── .github/                     # GitHub workflows & actions
│   └── workflows/
│       ├── build.yml           # Build pipeline
│       ├── deploy.yml          # Deployment pipeline
│       ├── test.yml            # Testing pipeline
│       └── security.yml        # Security scanning
├── apps/                        # Frontend applications
│   ├── client/                 # Customer mobile app (React Native)
│   │   ├── app/
│   │   │   ├── (tabs)/         # Tab navigation
│   │   │   ├── booking/        # Booking flow
│   │   │   ├── profile/        # User profile
│   │   │   └── _layout.tsx     # Root layout
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ui/             # Basic UI elements
│   │   │   ├── cinematic/      # Cinematic components (Spine, Rive)
│   │   │   └── ride/           # Ride-specific components
│   │   ├── context/            # React contexts
│   │   ├── hooks/              # Custom hooks
│   │   ├── lib/                # Utility functions
│   │   ├── assets/             # Images, fonts, etc.
│   │   ├── constants/          # App constants
│   │   ├── types/              # TypeScript types
│   │   ├── app.json            # Expo config
│   │   ├── babel.config.js     # Babel config
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── driver/                 # Driver mobile app (React Native)
│   │   ├── app/
│   │   │   ├── (tabs)/
│   │   │   ├── navigation/     # Navigation screen
│   │   │   ├── sos/            # SOS screen
│   │   │   └── _layout.tsx
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── cinematic/
│   │   │   └── driver/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── assets/
│   │   ├── constants/
│   │   ├── types/
│   │   ├── app.json
│   │   ├── babel.config.js
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── admin/                  # Admin dashboard (Next.js)
│       ├── app/
│       │   ├── (dashboard)/    # Dashboard group
│       │   │   ├── page.tsx    # Dashboard home
│       │   │   ├── analytics/  # Analytics page
│       │   │   ├── sos/        # SOS dispatch page
│       │   │   ├── tokens/     # Token management page
│       │   │   └── verification/ # Verification queue page
│       │   ├── api/            # API routes for admin
│       │   ├── globals.css     # Global styles
│       │   └── layout.tsx      # Root layout
│       ├── components/         # Reusable components
│       │   ├── ui/             # Shadcn/ui components
│       │   ├── dashboard/      # Dashboard-specific components
│       │   └── cinematic/      # Cinematic overlays
│       ├── lib/                # Utility functions
│       ├── types/              # TypeScript types
│       ├── constants/          # Constants
│       ├── public/             # Static assets
│       ├── next.config.js      # Next.js config
│       ├── package.json
│       └── tsconfig.json
├── packages/                    # Shared packages
│   ├── ui/                     # Shared UI components
│   │   ├── src/
│   │   │   ├── components/     # Reusable components
│   │   │   ├── hooks/          # Shared hooks
│   │   │   ├── utils/          # Utility functions
│   │   │   └── index.ts        # Export file
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── types/                  # Shared TypeScript types
│   │   ├── src/
│   │   │   ├── api.ts          # API response types
│   │   │   ├── ride.ts         # Ride-related types
│   │   │   ├── user.ts         # User-related types
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── utils/                  # Shared utility functions
│   │   ├── src/
│   │   │   ├── crypto.ts       # Cryptographic utilities
│   │   │   ├── date.ts         # Date utilities
│   │   │   ├── geo.ts          # Geolocation utilities
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── config/                 # Shared configuration
│       ├── src/
│       │   ├── turborepo.js    # Turborepo config
│       │   ├── eslint.js       # ESLint config
│       │   └── jest.js         # Jest config
│       ├── package.json
│       └── tsconfig.json
├── services/                    # Backend services
│   ├── auth/                   # Authentication service
│   │   ├── src/
│   │   │   ├── controllers/    # Route controllers
│   │   │   ├── middleware/     # Express middleware
│   │   │   ├── models/         # Database models
│   │   │   ├── routes/         # API routes
│   │   │   ├── services/       # Business logic
│   │   │   ├── utils/          # Utility functions
│   │   │   └── index.ts        # Main server file
│   │   ├── tests/              # Unit and integration tests
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── ride/                   # Ride matching and management service
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── payment/                # Payment processing service
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── token/                  # Token (ROSE/XRP) service
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── ml/                     # Machine learning service (FastAPI)
│   │   ├── src/
│   │   │   ├── api/            # FastAPI routes
│   │   │   ├── models/         # ML models
│   │   │   ├── services/       # Prediction services
│   │   │   ├── utils/          # Utility functions
│   │   │   └── main.py         # Main FastAPI app
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   ├── requirements.txt
│   │   └── pyproject.toml
│   ├── sos/                    # SOS service
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   └── index.ts
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── verify/                 # Verification service (OCR, LTO, NBI)
│       ├── src/
│       │   ├── controllers/
│       │   ├── middleware/
│       │   ├── models/
│       │   ├── routes/
│       │   ├── services/
│       │   ├── utils/
│       │   └── index.ts
│       ├── tests/
│       ├── Dockerfile
│       ├── package.json
│       └── tsconfig.json
├── infra/                       # Infrastructure as Code
│   ├── terraform/              # Terraform configurations
│   │   ├── main.tf             # Main configuration
│   │   ├── variables.tf        # Input variables
│   │   ├── outputs.tf          # Output variables
│   │   ├── modules/            # Reusable modules
│   │   │   ├── eks/            # EKS cluster
│   │   │   ├── rds/            # RDS database
│   │   │   ├── redis/          # Redis cluster
│   │   │   └── s3/             # S3 buckets
│   │   └── environments/       # Environment-specific configs
│   │       ├── prod/
│   │       └── staging/
│   ├── kubernetes/             # Kubernetes manifests
│   │   ├── namespaces/
│   │   ├── configmaps/
│   │   ├── secrets/
│   │   └── services/
│   │       ├── auth/
│   │       ├── ride/
│   │       ├── payment/
│   │       ├── token/
│   │       ├── ml/
│   │       ├── sos/
│   │       └── verify/
│   ├── docker/                 # Dockerfiles and compose files
│   │   ├── docker-compose.yml  # For local development
│   │   └── docker-compose.prod.yml # For production
│   └── monitoring/             # Monitoring and logging
│       ├── prometheus/
│       ├── grafana/
│       └── elasticsearch/
├── docs/                        # Documentation
│   ├── api/                    # API documentation
│   │   ├── openapi.yaml        # OpenAPI specification
│   │   └── README.md
│   ├── architecture/            # Architecture diagrams
│   ├── deployment/              # Deployment guides
│   └── development/             # Development setup
├── scripts/                     # Utility scripts
│   ├── build.sh                # Build all apps and services
│   ├── deploy.sh               # Deploy to production
│   ├── test.sh                 # Run all tests
│   └── setup.sh                # Development environment setup
├── .gitignore
├── .prettierrc
├── .eslintrc.json
├── jest.config.js
├── package.json               # Root package.json
├── pnpm-workspace.yaml        # PNPM workspace configuration
├── README.md
└── turbo.json                # Turborepo configuration

---

Key Components Explained

1. Frontend Applications (apps/)
Client App: Customer-facing React Native app with booking, payment, and profile management
Driver App: Driver React Native app with navigation, SOS, and earnings tracking
Admin Dashboard: Next.js web app for operations management, analytics, and monitoring

3. Backend Services (services/)
Auth Service: JWT-based authentication with KYC verification
Ride Service: Real-time ride matching, tracking, and completion with auto-pay
Payment Service: Multi-currency payment processing (PHP, XRP, ROSE)
Token Service: ROSE token minting and XRP bridging via Wormhole
ML Service: AI-powered pricing, fraud detection, and route optimization
SOS Service: Emergency alert system with geo-fenced driver dispatch
Verify Service: Document verification using OCR and government APIs

4. Shared Packages (packages/)
UI Components: Reusable UI elements for consistent design
Type Definitions: Shared TypeScript interfaces and types
Utilities: Common helper functions (crypto, date, geo)
Configuration: Shared tooling configurations

5. Infrastructure (infra/)
Terraform: AWS infrastructure provisioning (EKS, RDS, Redis, S3)
Kubernetes: Service deployment manifests
Docker: Containerization for all services
Monitoring: Prometheus, Grafana, and ELK stack

6. Documentation (docs/)
API Docs: OpenAPI specification for all services
Architecture: System design diagrams and explanations
Deployment: Step-by-step deployment guides
Development: Setup instructions for contributors

7. CI/CD (.github/workflows/)
Build Pipeline: Automated building of all apps and services
Test Pipeline: Unit, integration, and end-to-end testing
Deploy Pipeline: Automated deployment to staging and production
Security Pipeline: Vulnerability scanning and compliance checks
This structure ensures a clear separation of concerns, reusability of code, and efficient development and deployment workflows. The use of Turborepo and PNPM workspaces allows for optimized builds and dependency management across the entire project,
