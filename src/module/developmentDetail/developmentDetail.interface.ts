interface IAddress {
    id: string;
    latitude: string;
    longitude: string;
    country: string;
    state: string;
    shortenState: string;
    area: string;
    thoroughfare: string;
    thoroughfareNumber: string;
    postalCode: string;
    region: null;
    buildingName: null;
    slug: string;
    updatedAt: string;
  }
  
  interface IShowcaseHeaders {
    faq: null;
    about: null;
    articles: null;
    location: null;
    childListing: null;
    suburbInsights: null;
    supplierInsights: null;
    featuresAmenities: null;
  }
  
  interface IThumbnail {
    id: string;
    type: string;
    location: string;
    name: string;
    textAlternative: null; 
    size: number;
    url: string;
    position: number;
    createdAt: string;
    updatedAt: string;
  }
  
  interface IListType {
    id: string;
    type: string;
    location: string;
    name: string;
    textAlternative: string;
    size: number;
    url: string;
    position: number;
    createdAt: string;
    updatedAt: string;
  }
  
  interface File {
    thumbnail: IThumbnail[];
    listType: IListType[];
  }
  
  interface IDescription {
    textListing: string;
    textProfile: string;
    textTransactional: string;
  }
  
  interface IProperties {
    id: string;
    title: string;
    priceDisplay: string;
    price: string;
    priceFrom: string;
    priceTo: string;
    bedrooms: string;
    bathrooms: string;
    carSpaces: string;
    livingAreas: string;
    discr: string;
    frontage: null;
    depth: null;
    levels: null;
    aspect: null;
    areaTotal: number;
    areaExternal: null;
    areaInternal: null;
    createdAt: string;
    useFloorPlan: number;
    isHidden: number;
    files: File;
    studyroom: string;
    private_pool: string;
    enquire_only: number;
    slug: string;
    unit_number: string;
    isUnitNumberHidden: number;
    description: IDescription;
  }
  
  interface IFile {
    thumbnail: IThumbnail[];
    featuredThumbnail: IThumbnail[];
  }
  
  interface IGallery {
    url: string
    altTag: string
  }

  interface IAmenity {
    description: string;
    amenity: {
        id: string;
        name: string;
        icon: string
    }
  }

  interface IEnquiryConfig {
    video_enquiry: string;
    general_enquiry: string;
  }
  
  interface IDetails {
    items: number;
    levels: number;
    completionDate: string;
    bedroomOptions: string;
    stampDuty: null; 
    corporateFees: null; 
    phone: string;
    email: string[];
    enquiryConfig: IEnquiryConfig;
  }
  
  interface IDevelopmentDetail {
    id: string;
    title: string;
    status: string;
    projectStatus: null;
    featuredWeight: number;
    discr: string;
    updatedAt: string;
    totalProperties: number;
    classification: string;
    showcaseHeaders: IShowcaseHeaders;
    projectTypes: string;
    priceSearch: string;
    priceDisplay: number;
    bedrooms: string;
    bathrooms: string;
    carSpaces: string;
    studyroom: string;
    private_pool: string;
    address: IAddress;
    properties : IProperties[];
    files: IFile;
    image: string;
    galleries: IGallery[];
    amenities: IAmenity[];
    details: IDetails;
    displaySuite: {
      address: IAddress
    }
  }


  export interface IDevDetails {
    devDetail: IDevelopmentDetail
  }