/**
 * KYC Document Types with embedded field definitions
 * This data structure merges document types with their field requirements
 */

// Shared field definitions that will be embedded in each document type
const commonFields = {
  document_date: {
    id: "document_date",
    label: "Document Date",
    placeholder: "DD/MM/YY",
    type: "DATE",
    validation: {
      required: true,
      minLength: 8,
      maxLength: 8,
      errorMessage: "Please enter a valid date (DD/MM/YYYY)",
    },
  },
  full_name: {
    id: "full_name",
    label: "Name on Document",
    type: "TEXT",
    validation: {
      required: true,
      minLength: 2,
      maxLength: 100,
    },
  },
  street_address: {
    id: "street_address",
    label: "Street Address",
    type: "TEXT",
    placeholder: "Street address shown on bill",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  suburb: {
    id: "suburb",
    label: "Suburb",
    type: "TEXT",
    validation: {
      required: true,
      minLength: 2,
    },
  },
  state: {
    id: "state",
    label: "State",
    type: "DROPDOWN",
    dropdownOptions: ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"],
    validation: {
      required: true,
    },
  },
  postcode: {
    id: "postcode",
    label: "Postcode",
    type: "TEXT",
    placeholder: "4 digits",
    validation: {
      required: true,
      minLength: 4,
      maxLength: 4,
      errorMessage: "Postcode must be 4 digits",
    },
  },
};

// Helper function to create provider field
const createProviderField = (providerId, label, helpText = null) => {
  const field = {
    id: providerId,
    label: label,
    type: "DROPDOWN",
    dropdownOptions: ["123", "456"],
    validation: {
      required: true,
    },
  };

  if (helpText) {
    field.helpText = helpText;
  }

  return field;
};

export const kycDocumentTypes = [
  {
    type: "ELECTRICITY_BILL",
    category: "FINANCIAL",
    availableInCountries: [
      {
        name: "Australia",
        code: "AU",
        flagResId: "au",
      },
    ],
    priorities: [
      {
        proofOfAddress: 1,
      },
    ],
    fields: [
      createProviderField("electricity_provider", "Electricity Provider"),
      commonFields.document_date,
      commonFields.full_name,
      commonFields.street_address,
      commonFields.suburb,
      commonFields.state,
      commonFields.postcode,
    ],
    photoRequirements: [
      {
        id: "front",
        name: "front",
        displayName: "Electricity Bill",
        boundaryShape: "RECTANGLE",
        cameraType: "BACK",
      },
    ],
    requiresSelfie: false,
  },
  {
    type: "WATER_BILL",
    category: "FINANCIAL",
    availableInCountries: [
      {
        name: "Australia",
        code: "AU",
        flagResId: "au",
      },
    ],
    priorities: [
      {
        proofOfAddress: 2,
      },
    ],
    fields: [
      createProviderField("water_provider", "Water Provider"),
      commonFields.document_date,
      commonFields.full_name,
      commonFields.street_address,
      commonFields.suburb,
      commonFields.state,
      commonFields.postcode,
    ],
    photoRequirements: [
      {
        id: "front",
        name: "front",
        displayName: "Water Bill",
        boundaryShape: "RECTANGLE",
        cameraType: "BACK",
      },
    ],
    requiresSelfie: false,
  },
  {
    type: "GAS_BILL",
    category: "FINANCIAL",
    availableInCountries: [
      {
        name: "Australia",
        code: "AU",
        flagResId: "au",
      },
    ],
    priorities: [
      {
        proofOfAddress: 3,
      },
    ],
    fields: [
      createProviderField("gas_provider", "Gas Provider"),
      commonFields.document_date,
      commonFields.full_name,
      commonFields.street_address,
      commonFields.suburb,
      commonFields.state,
      commonFields.postcode,
    ],
    photoRequirements: [
      {
        id: "front",
        name: "front",
        displayName: "Gas Bill",
        boundaryShape: "RECTANGLE",
        cameraType: "BACK",
      },
    ],
    requiresSelfie: false,
  },
  {
    type: "MOBILE_BILL",
    category: "FINANCIAL",
    availableInCountries: [
      {
        name: "Australia",
        code: "AU",
        flagResId: "au",
      },
    ],
    priorities: [
      {
        proofOfAddress: 4,
      },
    ],
    fields: [
      createProviderField(
        "mobile_provider",
        "Mobile Provider",
        "Postpaid plans only (prepaid not acceptable)"
      ),
      commonFields.document_date,
      commonFields.full_name,
      commonFields.street_address,
      commonFields.suburb,
      commonFields.state,
      commonFields.postcode,
    ],
    photoRequirements: [
      {
        id: "front",
        name: "front",
        displayName: "Mobile Bill",
        boundaryShape: "RECTANGLE",
        cameraType: "BACK",
      },
    ],
    requiresSelfie: false,
  },
  {
    type: "BANK_STATEMENT",
    category: "FINANCIAL",
    availableInCountries: [
      {
        name: "Australia",
        code: "AU",
        flagResId: "au",
      },
    ],
    priorities: [
      {
        proofOfAddress: 5,
      },
    ],
    fields: [
      createProviderField("bank_provider", "Bank Provider"),
      commonFields.document_date,
      commonFields.full_name,
      commonFields.street_address,
      commonFields.suburb,
      commonFields.state,
      commonFields.postcode,
    ],
    photoRequirements: [
      {
        id: "front",
        name: "front",
        displayName: "Bank Statement",
        boundaryShape: "RECTANGLE",
        cameraType: "BACK",
      },
    ],
    requiresSelfie: false,
  },
];
