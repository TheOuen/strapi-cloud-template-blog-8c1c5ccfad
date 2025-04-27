import type { Schema, Struct } from '@strapi/strapi';

export interface SharedComponentButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_buttons';
  info: {
    displayName: 'ComponentButton';
  };
  attributes: {
    link: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    text: Schema.Attribute.String;
  };
}

export interface SharedComponentContactDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_contact_details';
  info: {
    displayName: 'ComponentContactDetail';
  };
  attributes: {
    detail: Schema.Attribute.Text;
  };
}

export interface SharedComponentFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_feature_cards';
  info: {
    displayName: 'ComponentFeatureCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_links';
  info: {
    displayName: 'ComponentLink';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedComponentListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_list_items';
  info: {
    displayName: 'ComponentListItem';
  };
  attributes: {
    item_text: Schema.Attribute.String;
  };
}

export interface SharedComponentSitemapColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_sitemap_columns';
  info: {
    description: '';
    displayName: 'ComponentSitemapColumn';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.component-link', true>;
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
      'shared.component-button': SharedComponentButton;
      'shared.component-contact-detail': SharedComponentContactDetail;
      'shared.component-feature-card': SharedComponentFeatureCard;
      'shared.component-link': SharedComponentLink;
      'shared.component-list-item': SharedComponentListItem;
      'shared.component-sitemap-column': SharedComponentSitemapColumn;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
