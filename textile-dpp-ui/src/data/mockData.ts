export interface Product {
  id: string;
  name: string;
  category: string;
  materialType: string;
  weight: number;
  sustainabilityScore: number;
  carbonFootprint: {
    total: number;
    manufacturing: number;
    packaging: number;
    transport: number;
    usage: number;
    endOfLife: number;
  };
  verificationStatus: 'pending' | 'approved' | 'rejected';
  qrCode: string;
  createdAt: string;
  manufacturer: string;
  documents?: {
    id: string;
    name: string;
    type: string;
    uploadedAt: string;
    url: string;
  }[];
  rejectionReason?: string;
  approvedBy?: string;
  approvedAt?: string;
}

export interface SerialProduct extends Product {
  serialId: string;
}

export const mockProducts: Product[] = [
  {
    id: 'PROD-001',
    name: 'Organic Cotton T-Shirt',
    category: 'Apparel',
    materialType: '100% Organic Cotton',
    weight: 150,
    sustainabilityScore: 85,
    carbonFootprint: {
      total: 2.5,
      manufacturing: 1.2,
      packaging: 0.3,
      transport: 0.6,
      usage: 0.2,
      endOfLife: 0.2,
    },
    verificationStatus: 'approved',
    qrCode: 'QR-PROD001',
    createdAt: '2024-01-15',
    manufacturer: 'EcoTextiles Ltd',
    documents: [
      {
        id: 'doc-001',
        name: 'Organic Cotton Certificate.pdf',
        type: 'application/pdf',
        uploadedAt: '2024-01-15',
        url: '#',
      },
      {
        id: 'doc-002',
        name: 'Carbon Footprint Report.pdf',
        type: 'application/pdf',
        uploadedAt: '2024-01-15',
        url: '#',
      },
    ],
    approvedBy: 'auditor@greenpassport.com',
    approvedAt: '2024-01-16',
  },
  {
    id: 'PROD-002',
    name: 'Recycled Polyester Jacket',
    category: 'Outerwear',
    materialType: '80% Recycled Polyester',
    weight: 450,
    sustainabilityScore: 78,
    carbonFootprint: {
      total: 4.8,
      manufacturing: 2.1,
      packaging: 0.5,
      transport: 1.2,
      usage: 0.6,
      endOfLife: 0.4,
    },
    verificationStatus: 'pending',
    qrCode: 'QR-PROD002',
    createdAt: '2024-01-20',
    manufacturer: 'GreenWear Co',
    documents: [
      {
        id: 'doc-003',
        name: 'Recycled Material Certificate.pdf',
        type: 'application/pdf',
        uploadedAt: '2024-01-20',
        url: '#',
      },
    ],
  },
  {
    id: 'PROD-003',
    name: 'Hemp Blend Jeans',
    category: 'Apparel',
    materialType: '60% Hemp, 40% Organic Cotton',
    weight: 500,
    sustainabilityScore: 92,
    carbonFootprint: {
      total: 3.2,
      manufacturing: 1.5,
      packaging: 0.4,
      transport: 0.8,
      usage: 0.3,
      endOfLife: 0.2,
    },
    verificationStatus: 'approved',
    qrCode: 'QR-PROD003',
    createdAt: '2024-02-01',
    manufacturer: 'EcoTextiles Ltd',
    documents: [
      {
        id: 'doc-004',
        name: 'Hemp Certification.pdf',
        type: 'application/pdf',
        uploadedAt: '2024-02-01',
        url: '#',
      },
      {
        id: 'doc-005',
        name: 'Supply Chain Report.pdf',
        type: 'application/pdf',
        uploadedAt: '2024-02-01',
        url: '#',
      },
    ],
    approvedBy: 'auditor@greenpassport.com',
    approvedAt: '2024-02-02',
  },
];

export const generateSerialProducts = (productId: string, batchSize: number): SerialProduct[] => {
  const product = mockProducts.find(p => p.id === productId) || mockProducts[0];
  return Array.from({ length: batchSize }, (_, i) => ({
    ...product,
    serialId: `${productId}-${String(i + 1).padStart(3, '0')}`,
  }));
};

export const findProductBySerial = (serialId: string): SerialProduct | null => {
  // Serial format: PROD-001-001 (productId-serialNumber)
  // Extract productId by taking first two parts: PROD-001
  const parts = serialId.split('-');
  if (parts.length < 3) return null;
  
  const productId = `${parts[0]}-${parts[1]}`; // e.g., "PROD-001"
  const product = mockProducts.find(p => p.id === productId);
  if (!product) return null;
  
  return {
    ...product,
    serialId,
  };
};

export const getSustainabilityGrade = (score: number): string => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'E';
};

export const getScoreColor = (score: number): string => {
  if (score >= 80) return 'text-forest-600';
  if (score >= 60) return 'text-leaf-600';
  return 'text-earth-600';
};

export const getVerificationBadgeColor = (status: string): string => {
  switch (status) {
    case 'approved':
      return 'badge-success';
    case 'pending':
      return 'badge-warning';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'badge-info';
  }
};
