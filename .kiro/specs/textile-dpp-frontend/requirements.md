# Requirements Document

## Introduction

The Textile Digital Product Passport (DPP) Frontend is a modern, responsive web application that enables textile manufacturers to create digital product passports with carbon footprint tracking and sustainability scoring, generate batches of serialized products with QR codes, and allows consumers to verify product sustainability credentials. The platform features an Indian eco-sustainability theme with a clean, government-grade interface suitable for environmental compliance and transparency initiatives.

## Glossary

- **DPP_Frontend**: The React-based web application user interface
- **Manufacturer_Dashboard**: The interface where manufacturers create and manage product passports
- **Batch_Generator**: The interface for generating multiple serialized product instances
- **Consumer_Portal**: The interface where consumers verify product sustainability information
- **Product_Passport**: A digital record containing product details, emissions data, and sustainability metrics
- **Serial_ID**: A unique identifier in PRODUCTID-NNN format for each product instance
- **Carbon_Footprint**: The total greenhouse gas emissions measured across product lifecycle stages
- **Sustainability_Score**: A calculated metric representing overall environmental performance
- **Emission_Stage**: One of five lifecycle phases: Manufacturing, Packaging, Transport, Usage, End of Life
- **QR_Code**: A visual code representation of the Serial_ID for product verification
- **Navigation_Sidebar**: The persistent navigation menu with Dashboard, Generate Batch, and Consumer Passport options

## Requirements

### Requirement 1: Manufacturer Product Creation

**User Story:** As a textile manufacturer, I want to create digital product passports with emission data, so that I can track and communicate the environmental impact of my products.

#### Acceptance Criteria

1. THE Manufacturer_Dashboard SHALL display a product creation form with fields for Product Name, Material Type, Weight, Manufacturing Emission, Packaging Emission, Transport Emission, Usage Emission, and End of Life Emission
2. WHEN the manufacturer submits the product creation form, THE DPP_Frontend SHALL calculate the total Carbon_Footprint by summing all five Emission_Stage values
3. WHEN the manufacturer submits the product creation form, THE DPP_Frontend SHALL calculate the Sustainability_Score based on the emission data
4. WHEN the manufacturer submits the product creation form, THE DPP_Frontend SHALL display the calculated Carbon_Footprint value
5. WHEN the manufacturer submits the product creation form, THE DPP_Frontend SHALL display the calculated Sustainability_Score value
6. WHEN the manufacturer submits the product creation form, THE DPP_Frontend SHALL display an AI-generated sustainability narrative using placeholder text
7. THE Manufacturer_Dashboard SHALL validate that all numeric emission fields contain non-negative values before submission

### Requirement 2: Batch Serial Generation

**User Story:** As a textile manufacturer, I want to generate batches of serialized products with QR codes, so that I can assign unique identifiers to multiple product instances efficiently.

#### Acceptance Criteria

1. THE Batch_Generator SHALL display an input field for batch size specification
2. WHEN the manufacturer clicks the generate batch button, THE Batch_Generator SHALL create a list of Serial_IDs in PRODUCTID-NNN format where NNN is a zero-padded sequential number
3. WHEN the manufacturer clicks the generate batch button, THE Batch_Generator SHALL display a QR code placeholder for each generated Serial_ID
4. THE Batch_Generator SHALL display a download ZIP button for the generated batch
5. WHEN the batch size exceeds 1000, THE Batch_Generator SHALL display a warning message about large batch sizes

### Requirement 3: Consumer Product Verification

**User Story:** As a consumer, I want to verify product sustainability information using a serial ID, so that I can make informed purchasing decisions based on environmental impact.

#### Acceptance Criteria

1. THE Consumer_Portal SHALL display an input field for Serial_ID entry
2. WHEN a consumer enters a valid Serial_ID, THE Consumer_Portal SHALL display the Product Name, Material Type, Carbon_Footprint, Sustainability_Score, sustainability description, and QR verification status
3. WHEN a consumer enters an invalid Serial_ID, THE Consumer_Portal SHALL display an error message indicating the product was not found
4. THE Consumer_Portal SHALL display product information in a card-based layout
5. THE Consumer_Portal SHALL display an emission breakdown visualization using placeholder chart data

### Requirement 4: Visual Design and Theming

**User Story:** As a platform user, I want a clean, eco-themed interface that reflects Indian sustainability values, so that the platform conveys environmental responsibility and government-grade professionalism.

#### Acceptance Criteria

1. THE DPP_Frontend SHALL use a color palette consisting of forest green, leaf green, beige, and off-white as primary colors
2. THE DPP_Frontend SHALL display eco-themed leaf-style icons throughout the interface
3. THE DPP_Frontend SHALL apply rounded corners to all card and button elements
4. THE DPP_Frontend SHALL apply soft shadow effects to elevated UI components
5. THE DPP_Frontend SHALL use Tailwind CSS for all styling implementations
6. THE DPP_Frontend SHALL maintain a minimal, clean aesthetic consistent with government sustainability platforms

### Requirement 5: Navigation and Layout

**User Story:** As a platform user, I want consistent navigation across all pages, so that I can easily access different features of the platform.

#### Acceptance Criteria

1. THE DPP_Frontend SHALL display a navigation bar with the logo text "Textile Digital Passport" on all pages
2. THE DPP_Frontend SHALL display the Navigation_Sidebar with three options: Dashboard, Generate Batch, and Consumer Passport
3. WHEN a user clicks a Navigation_Sidebar option, THE DPP_Frontend SHALL navigate to the corresponding page
4. THE Navigation_Sidebar SHALL highlight the currently active page option
5. THE DPP_Frontend SHALL maintain the Navigation_Sidebar visibility across all page transitions

### Requirement 6: Responsive Design

**User Story:** As a platform user on mobile devices, I want the interface to adapt to my screen size, so that I can access all features on any device.

#### Acceptance Criteria

1. WHEN the viewport width is less than 768 pixels, THE DPP_Frontend SHALL adapt the layout for mobile display
2. WHEN the viewport width is less than 768 pixels, THE Navigation_Sidebar SHALL collapse into a hamburger menu
3. THE DPP_Frontend SHALL ensure all form inputs are touch-friendly with adequate spacing on mobile devices
4. THE DPP_Frontend SHALL ensure all text remains readable across all viewport sizes
5. THE DPP_Frontend SHALL ensure all interactive elements remain accessible on touch devices

### Requirement 7: Data Visualization

**User Story:** As a user viewing product information, I want to see visual representations of emission data, so that I can quickly understand the environmental impact breakdown.

#### Acceptance Criteria

1. THE Manufacturer_Dashboard SHALL display a chart showing the breakdown of emissions across all five Emission_Stage categories
2. THE Consumer_Portal SHALL display a chart showing the emission breakdown for the verified product
3. THE DPP_Frontend SHALL use placeholder data for all chart visualizations
4. THE DPP_Frontend SHALL ensure charts are responsive and readable on mobile devices

### Requirement 8: Mock Data Implementation

**User Story:** As a developer, I want the frontend to use mock JSON data, so that I can demonstrate full functionality without backend dependencies.

#### Acceptance Criteria

1. THE DPP_Frontend SHALL use mock JSON data for all product information displays
2. THE DPP_Frontend SHALL simulate form submissions using local state management
3. THE DPP_Frontend SHALL simulate Serial_ID lookups using predefined mock data
4. THE DPP_Frontend SHALL NOT make any external API calls or network requests
5. THE DPP_Frontend SHALL structure mock data in a format compatible with future backend integration

### Requirement 9: Technology Stack Implementation

**User Story:** As a developer, I want the frontend built with modern React tooling, so that the codebase is maintainable and performant.

#### Acceptance Criteria

1. THE DPP_Frontend SHALL be built using React with TypeScript
2. THE DPP_Frontend SHALL use Vite as the build tool and development server
3. THE DPP_Frontend SHALL use Tailwind CSS for all styling
4. THE DPP_Frontend SHALL organize code into components, pages, assets, and styles directories
5. THE DPP_Frontend SHALL include a package.json with scripts for install and dev server startup

### Requirement 10: QR Code Display

**User Story:** As a manufacturer, I want to see QR code representations for each serial ID, so that I can print and attach them to physical products.

#### Acceptance Criteria

1. WHEN a batch is generated, THE Batch_Generator SHALL display a QR code placeholder for each Serial_ID
2. THE Batch_Generator SHALL visually associate each QR code with its corresponding Serial_ID
3. THE Consumer_Portal SHALL display a QR verification status indicator
4. THE DPP_Frontend SHALL use placeholder boxes or dummy QR images for QR code visualization

