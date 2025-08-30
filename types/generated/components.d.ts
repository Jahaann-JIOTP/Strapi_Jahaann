import type { Schema, Struct } from '@strapi/strapi';

export interface JobRequirement extends Struct.ComponentSchema {
  collectionName: 'components_job_requirements';
  info: {
    displayName: 'Requirement';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface JobSkill extends Struct.ComponentSchema {
  collectionName: 'components_job_skills';
  info: {
    displayName: 'Skill';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ProductIconList extends Struct.ComponentSchema {
  collectionName: 'components_product_icon_lists';
  info: {
    displayName: 'Icon List';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ProductIntroduction extends Struct.ComponentSchema {
  collectionName: 'components_product_introductions';
  info: {
    displayName: 'Introduction';
  };
  attributes: {
    description: Schema.Attribute.Text;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ProductMockupTab extends Struct.ComponentSchema {
  collectionName: 'components_product_mockup_tabs';
  info: {
    displayName: 'Mockup Tab';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<'product.mockup-tab-item', true>;
    tabName: Schema.Attribute.String;
  };
}

export interface ProductMockupTabItem extends Struct.ComponentSchema {
  collectionName: 'components_product_mockup_tab_items';
  info: {
    displayName: 'Mockup Tab Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ServicesCapabilities extends Struct.ComponentSchema {
  collectionName: 'components_services_capabilities';
  info: {
    displayName: 'Capabilities';
  };
  attributes: {
    firstHeading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'services.capability-item', true>;
    secondHeading: Schema.Attribute.Component<'services.heading-parts', false>;
    subtitle: Schema.Attribute.String;
  };
}

export interface ServicesCapabilityItem extends Struct.ComponentSchema {
  collectionName: 'components_services_capability_items';
  info: {
    displayName: 'CapabilityItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    icons: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ServicesDeliverableItem extends Struct.ComponentSchema {
  collectionName: 'components_services_deliverable_items';
  info: {
    displayName: 'DeliverableItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ServicesHeadingParts extends Struct.ComponentSchema {
  collectionName: 'components_services_heading_parts';
  info: {
    displayName: 'HeadingParts';
  };
  attributes: {
    headingFirstPart: Schema.Attribute.String;
    headingLastPart: Schema.Attribute.String;
    headingStylePart: Schema.Attribute.String;
  };
}

export interface ServicesHero extends Struct.ComponentSchema {
  collectionName: 'components_services_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    bgType: Schema.Attribute.Enumeration<['image', 'video']>;
    buttonText: Schema.Attribute.String;
    headingFirstPart: Schema.Attribute.String;
    headingSecondPart: Schema.Attribute.String;
    headingStyledPart: Schema.Attribute.String;
    heroBg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heroPara: Schema.Attribute.Text;
  };
}

export interface ServicesKeyDeliverables extends Struct.ComponentSchema {
  collectionName: 'components_services_key_deliverables';
  info: {
    displayName: 'KeyDeliverables';
  };
  attributes: {
    firstHeading: Schema.Attribute.String;
    headingFirstPart: Schema.Attribute.String;
    headingLastPart: Schema.Attribute.String;
    headingStylePart: Schema.Attribute.String;
    iconList: Schema.Attribute.Component<'services.deliverable-item', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
  };
}

export interface ServicesKeyTools extends Struct.ComponentSchema {
  collectionName: 'components_services_key_tools';
  info: {
    displayName: 'KeyTools';
  };
  attributes: {
    firstHeading: Schema.Attribute.String;
    headingFirstPart: Schema.Attribute.String;
    headingLastPart: Schema.Attribute.String;
    headingStylePart: Schema.Attribute.String;
    stacks: Schema.Attribute.Component<'services.tool-stack', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface ServicesProcess extends Struct.ComponentSchema {
  collectionName: 'components_services_processes';
  info: {
    displayName: 'Process';
  };
  attributes: {
    firstHeading: Schema.Attribute.String;
    headingFirstPart: Schema.Attribute.String;
    headingLastPart: Schema.Attribute.String;
    headingStylePart: Schema.Attribute.String;
    righSideHeading: Schema.Attribute.Text;
    steps: Schema.Attribute.Component<'services.process-step', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface ServicesProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_services_process_steps';
  info: {
    displayName: 'ProcessStep';
  };
  attributes: {
    detail: Schema.Attribute.Text;
    stepNo: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesSolutionSlide extends Struct.ComponentSchema {
  collectionName: 'components_services_solution_slides';
  info: {
    displayName: 'SolutionSlide';
  };
  attributes: {
    slideDetails: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ServicesSolutions extends Struct.ComponentSchema {
  collectionName: 'components_services_solutions';
  info: {
    displayName: 'Solutions';
  };
  attributes: {
    firstHeading: Schema.Attribute.String;
    headingFirstPart: Schema.Attribute.String;
    headingLastPart: Schema.Attribute.String;
    headingStylePart: Schema.Attribute.String;
    slides: Schema.Attribute.Component<'services.solution-slide', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface ServicesToolStack extends Struct.ComponentSchema {
  collectionName: 'components_services_tool_stacks';
  info: {
    displayName: 'ToolStack';
  };
  attributes: {
    icons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ServicesUseCaseTab extends Struct.ComponentSchema {
  collectionName: 'components_services_use_case_tabs';
  info: {
    displayName: 'UseCaseTab';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tabDetails: Schema.Attribute.Text;
    tabNo: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesUseCases extends Struct.ComponentSchema {
  collectionName: 'components_services_use_cases';
  info: {
    displayName: 'UseCases';
  };
  attributes: {
    firstHeading: Schema.Attribute.String;
    headingFirstPart: Schema.Attribute.String;
    headingLastPart: Schema.Attribute.String;
    headingStylePart: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'services.use-case-tab', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'job.requirement': JobRequirement;
      'job.skill': JobSkill;
      'product.icon-list': ProductIconList;
      'product.introduction': ProductIntroduction;
      'product.mockup-tab': ProductMockupTab;
      'product.mockup-tab-item': ProductMockupTabItem;
      'services.capabilities': ServicesCapabilities;
      'services.capability-item': ServicesCapabilityItem;
      'services.deliverable-item': ServicesDeliverableItem;
      'services.heading-parts': ServicesHeadingParts;
      'services.hero': ServicesHero;
      'services.key-deliverables': ServicesKeyDeliverables;
      'services.key-tools': ServicesKeyTools;
      'services.process': ServicesProcess;
      'services.process-step': ServicesProcessStep;
      'services.solution-slide': ServicesSolutionSlide;
      'services.solutions': ServicesSolutions;
      'services.tool-stack': ServicesToolStack;
      'services.use-case-tab': ServicesUseCaseTab;
      'services.use-cases': ServicesUseCases;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
