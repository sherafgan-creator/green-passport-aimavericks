# User Flow - Green Passport

## Overview

This document describes the complete user journey through the Green Passport platform for both Manufacturers and Consumers.

---

## Landing Page Flow

```
┌─────────────────────────────────────────┐
│         Landing Page (/)                │
│                                         │
│  • Platform Introduction                │
│  • What is Green Passport?             │
│  • Features for Manufacturers           │
│  • Features for Consumers               │
│  • Benefits Section                     │
│                                         │
│  ┌─────────────────┐ ┌───────────────┐│
│  │ Manufacturer    │ │ Consumer      ││
│  │ Login           │ │ Login         ││
│  └────────┬────────┘ └───────┬───────┘│
└───────────┼──────────────────┼─────────┘
            │                  │
            ▼                  ▼
```

---

## Manufacturer Flow

### 1. Authentication

```
┌─────────────────────────────────────────┐
│   Manufacturer Auth (/auth/manufacturer)│
│                                         │
│  ┌─────────────┐    ┌────────────────┐│
│  │   Login     │◄──►│   Sign Up      ││
│  │             │    │                ││
│  │ • Email     │    │ • Company Name ││
│  │ • Password  │    │ • Email        ││
│  │             │    │ • Password     ││
│  │             │    │ • Confirm Pass ││
│  └──────┬──────┘    └────────┬───────┘│
└─────────┼──────────────────┼──────────┘
          │                  │
          └────────┬─────────┘
                   │
                   ▼
         ┌─────────────────┐
         │ Authentication  │
         │   Successful    │
         └────────┬────────┘
                  │
                  ▼
```

### 2. Manufacturer Dashboard

```
┌─────────────────────────────────────────────────┐
│   Manufacturer Dashboard (/manufacturer/dashboard)│
│                                                   │
│  ┌──────────────────────────────────────────┐  │
│  │  Statistics Overview                      │  │
│  │  • Total Products                         │  │
│  │  • Avg Carbon Footprint                   │  │
│  │  • Avg Sustainability Score               │  │
│  │  • Verified Products                      │  │
│  └──────────────────────────────────────────┘  │
│                                                   │
│  ┌──────────────────────────────────────────┐  │
│  │  Emission Breakdown Chart                 │  │
│  │  (Stacked Bar Chart)                      │  │
│  └──────────────────────────────────────────┘  │
│                                                   │
│  ┌──────────────────────────────────────────┐  │
│  │  Product List Table                       │  │
│  │  • Product Name                           │  │
│  │  • Category                               │  │
│  │  • Sustainability Score                   │  │
│  │  • Verification Status                    │  │
│  │  • QR Code                                │  │
│  └──────────────────────────────────────────┘  │
│                                                   │
│  ┌──────────────────┐                           │
│  │ Add New Product  │                           │
│  └────────┬─────────┘                           │
└───────────┼─────────────────────────────────────┘
            │
            ▼
```

### 3. Create Product Passport

```
┌─────────────────────────────────────────┐
│   Create Product Modal                  │
│                                         │
│  Step 1: Basic Information             │
│  ┌────────────────────────────────┐   │
│  │ • Product Name                  │   │
│  │ • Material Type                 │   │
│  │ • Weight (grams)                │   │
│  └────────────────────────────────┘   │
│                                         │
│  Step 2: Emission Data (kg CO₂e)      │
│  ┌────────────────────────────────┐   │
│  │ • Manufacturing                 │   │
│  │ • Packaging                     │   │
│  │ • Transport                     │   │
│  │ • Usage                         │   │
│  │ • End of Life                   │   │
│  └────────────────────────────────┘   │
│                                         │
│  ┌──────────────┐  ┌──────────────┐  │
│  │   Create     │  │   Cancel     │  │
│  └──────┬───────┘  └──────────────┘  │
└─────────┼──────────────────────────────┘
          │
          ▼
    Product Created
    (Added to Dashboard)
```

### 4. Generate Batch

```
┌─────────────────────────────────────────────────┐
│   Generate Batch (/manufacturer/generate-batch) │
│                                                   │
│  Configuration                                    │
│  ┌──────────────────────────────────────────┐  │
│  │ Select Product: [Dropdown]                │  │
│  │                                            │  │
│  │ Batch Size: [Input 1-10,000]             │  │
│  │                                            │  │
│  │ ⚠️ Warning: Large batch (>1000)          │  │
│  │                                            │  │
│  │ ┌──────────────────┐                     │  │
│  │ │ Generate Batch   │                     │  │
│  │ └────────┬─────────┘                     │  │
│  └──────────┼────────────────────────────────┘  │
│             │                                     │
│             ▼                                     │
│  ┌──────────────────────────────────────────┐  │
│  │ Batch Preview                             │  │
│  │                                            │  │
│  │ Generated: 50 Units                       │  │
│  │                                            │  │
│  │ PROD-001-001  [QR]                       │  │
│  │ PROD-001-002  [QR]                       │  │
│  │ PROD-001-003  [QR]                       │  │
│  │ ...                                        │  │
│  │                                            │  │
│  │ ┌──────────────────┐                     │  │
│  │ │ Download ZIP     │                     │  │
│  │ └──────────────────┘                     │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

### 5. Logout

```
┌─────────────────────────────────────────┐
│   Sidebar (All Pages)                   │
│                                         │
│  ┌────────────────────────────────┐   │
│  │ User Profile                    │   │
│  │ • Name                          │   │
│  │ • Email                         │   │
│  └────────────────────────────────┘   │
│                                         │
│  ┌────────────────────────────────┐   │
│  │ Logout Button                   │   │
│  └──────────┬─────────────────────┘   │
└─────────────┼──────────────────────────┘
              │
              ▼
        Clear Session
              │
              ▼
      Redirect to Landing Page
```

---

## Consumer Flow

### 1. Authentication

```
┌─────────────────────────────────────────┐
│   Consumer Auth (/auth/consumer)        │
│                                         │
│  ┌─────────────┐    ┌────────────────┐│
│  │   Login     │◄──►│   Sign Up      ││
│  │             │    │                ││
│  │ • Email     │    │ • Full Name    ││
│  │ • Password  │    │ • Email        ││
│  │             │    │ • Password     ││
│  │             │    │ • Confirm Pass ││
│  └──────┬──────┘    └────────┬───────┘│
└─────────┼──────────────────┼──────────┘
          │                  │
          └────────┬─────────┘
                   │
                   ▼
         ┌─────────────────┐
         │ Authentication  │
         │   Successful    │
         └────────┬────────┘
                  │
                  ▼
```

### 2. Consumer Portal

```
┌─────────────────────────────────────────────────┐
│   Consumer Portal (/consumer/portal)            │
│                                                   │
│  ┌──────────────────────────────────────────┐  │
│  │ Search Product                            │  │
│  │                                            │  │
│  │ [Enter Serial ID: PROD-001-001]          │  │
│  │                                            │  │
│  │ ┌──────────────────┐                     │  │
│  │ │ Verify Product   │                     │  │
│  │ └────────┬─────────┘                     │  │
│  └──────────┼────────────────────────────────┘  │
│             │                                     │
│             ▼                                     │
│  ┌──────────────────────────────────────────┐  │
│  │ Product Found!                            │  │
│  └──────────────────────────────────────────┘  │
│             │                                     │
│             ▼                                     │
└─────────────┼─────────────────────────────────────┘
              │
              ▼
```

### 3. Product Details View

```
┌─────────────────────────────────────────────────┐
│   Product Information                           │
│                                                   │
│  ┌──────────────────────────────────────────┐  │
│  │ Quick Overview                            │  │
│  │                                            │  │
│  │ [Product Image]  Organic Cotton T-Shirt  │  │
│  │                  100% Organic Cotton      │  │
│  │                  Serial: PROD-001-001     │  │
│  │                  ✓ Verified               │  │
│  │                                            │  │
│  │                  Sustainability Score     │  │
│  │                        A                   │  │
│  │                       85/100               │  │
│  └──────────────────────────────────────────┘  │
│                                                   │
│  ┌──────────────────────────────────────────┐  │
│  │ Key Metrics                               │  │
│  │                                            │  │
│  │ Carbon Footprint    Water Usage           │  │
│  │ 2.5 kg CO₂         2.5 L                 │  │
│  │ 28% below avg      Low consumption        │  │
│  │                                            │  │
│  │ Circularity                               │  │
│  │ 85%                                       │  │
│  │ Highly recyclable                         │  │
│  └──────────────────────────────────────────┘  │
│                                                   │
│  ┌──────────────────────────────────────────┐  │
│  │ Emission Breakdown (Pie Chart)            │  │
│  │                                            │  │
│  │ • Manufacturing: 48%                      │  │
│  │ • Packaging: 12%                          │  │
│  │ • Transport: 24%                          │  │
│  │ • Usage: 8%                               │  │
│  │ • End of Life: 8%                         │  │
│  └──────────────────────────────────────────┘  │
│                                                   │
│  ┌──────────────────────────────────────────┐  │
│  │ Comparison vs Category Average            │  │
│  │                                            │  │
│  │ Carbon Footprint  ████████░░ 28% Better  │  │
│  │ Water Usage       ███████░░░ 35% Better  │  │
│  │ Recyclability     ████████░░ 15% Better  │  │
│  └──────────────────────────────────────────┘  │
│                                                   │
│  ┌──────────────────────────────────────────┐  │
│  │ Trust & Verification                      │  │
│  │                                            │  │
│  │ ✓ Third-Party Verified                   │  │
│  │ ✓ Certified Materials                    │  │
│  │ ✓ Transparent Supply Chain               │  │
│  └──────────────────────────────────────────┘  │
│                                                   │
│  ┌──────────────────────────────────────────┐  │
│  │ End-of-Life Guidance                      │  │
│  │                                            │  │
│  │ ♻️ Recycling Instructions                │  │
│  │ 🌱 Composting Option                     │  │
│  └──────────────────────────────────────────┘  │
│                                                   │
│  ┌──────────────────────────────────────────┐  │
│  │ Your Impact                               │  │
│  │                                            │  │
│  │ By choosing this product, you saved       │  │
│  │ 0.8 kg CO₂ compared to alternatives      │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

### 4. Product Not Found

```
┌─────────────────────────────────────────┐
│   Consumer Portal                       │
│                                         │
│  [Enter Serial ID: INVALID-001]        │
│                                         │
│  ┌──────────────────┐                  │
│  │ Verify Product   │                  │
│  └────────┬─────────┘                  │
└───────────┼──────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────┐
│   ⚠️ Error Message                     │
│                                         │
│   Product not found.                    │
│   Please check the serial ID            │
│   and try again.                        │
└─────────────────────────────────────────┘
```

---

## Navigation Flow

### Manufacturer Navigation

```
┌─────────────────────────────────────────┐
│   Sidebar Navigation                    │
│                                         │
│  🏠 Dashboard                           │
│     └─► /manufacturer/dashboard        │
│                                         │
│  📦 Generate Batch                      │
│     └─► /manufacturer/generate-batch   │
│                                         │
│  ─────────────────────────────────     │
│                                         │
│  👤 User Profile                        │
│     • Name                              │
│     • Email                             │
│                                         │
│  🚪 Logout                              │
│     └─► Clear session → Landing Page   │
└─────────────────────────────────────────┘
```

### Consumer Navigation

```
┌─────────────────────────────────────────┐
│   Sidebar Navigation                    │
│                                         │
│  🔍 Verify Product                      │
│     └─► /consumer/portal                │
│                                         │
│  ─────────────────────────────────────  │
│                                         │
│  👤 User Profile                        │
│     • Name                              │
│     • Email                             │
│                                         │
│  🚪 Logout                              │
│     └─► Clear session → Landing Page   │
└─────────────────────────────────────────┘
```

---

## Complete User Journey Map

```
                    Landing Page
                         │
         ┌───────────────┴───────────────┐
         │                               │
    Manufacturer                    Consumer
         │                               │
         ▼                               ▼
   Auth Page                        Auth Page
   (Login/Signup)                   (Login/Signup)
         │                               │
         ▼                               ▼
   Authenticated                    Authenticated
         │                               │
         ▼                               ▼
    Dashboard                        Portal
         │                               │
    ┌────┴────┐                         │
    │         │                         │
    ▼         ▼                         ▼
Create    Generate                  Verify
Product    Batch                    Product
    │         │                         │
    └────┬────┘                         │
         │                               │
         ▼                               ▼
      Logout                         Logout
         │                               │
         └───────────────┬───────────────┘
                         │
                         ▼
                   Landing Page
```

---

## Session Management Flow

```
┌─────────────────────────────────────────┐
│   User Action                           │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│   Check Authentication                  │
│   • Is user in context?                 │
│   • Is session in localStorage?         │
└────────────┬────────────────────────────┘
             │
      ┌──────┴──────┐
      │             │
      ▼             ▼
  Authenticated   Not Authenticated
      │             │
      │             ▼
      │    Redirect to Landing
      │             │
      ▼             │
  Check Role        │
      │             │
  ┌───┴───┐        │
  │       │        │
  ▼       ▼        │
Mfr    Consumer    │
  │       │        │
  ▼       ▼        │
Portal  Portal     │
  │       │        │
  └───┬───┘        │
      │            │
      ▼            │
  Render Page      │
      │            │
      └────────────┘
```

---

## Error Handling Flow

```
┌─────────────────────────────────────────┐
│   User Action                           │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│   Try Operation                         │
└────────────┬────────────────────────────┘
             │
      ┌──────┴──────┐
      │             │
      ▼             ▼
   Success        Error
      │             │
      │             ▼
      │    ┌────────────────┐
      │    │ Error Type?    │
      │    └───┬────────────┘
      │        │
      │    ┌───┴────┬────────┬──────────┐
      │    │        │        │          │
      │    ▼        ▼        ▼          ▼
      │  Auth    Network  Validation  Other
      │  Error   Error    Error       Error
      │    │        │        │          │
      │    ▼        ▼        ▼          ▼
      │  Show    Show     Show       Show
      │  Login   Network  Form       Generic
      │  Error   Error    Error      Error
      │    │        │        │          │
      │    └────────┴────────┴──────────┘
      │             │
      ▼             ▼
  Continue    User Retry
```

---

**Last Updated**: February 2026
**Version**: 2.0.0
