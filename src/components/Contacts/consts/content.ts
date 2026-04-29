export const TAGLINE = 'Get in touch';
export const HEADING = "We'd love to hear from you!";
export const SUBMIT_LABEL = 'Submit';

export type FormFieldName = 'name' | 'email' | 'phone' | 'message';

export interface FormField {
  name: FormFieldName;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel';
  required: boolean;
  multiline: boolean;
}

export const FORM_FIELDS: ReadonlyArray<FormField> = [
  {
    name: 'name',
    label: 'Name *',
    placeholder: 'Jane Smith',
    type: 'text',
    required: true,
    multiline: false,
  },
  {
    name: 'email',
    label: 'Email address *',
    placeholder: 'email@example.com',
    type: 'email',
    required: true,
    multiline: false,
  },
  {
    name: 'phone',
    label: 'Phone number',
    placeholder: '093-333-333',
    type: 'tel',
    required: false,
    multiline: false,
  },
  {
    name: 'message',
    label: 'Message',
    placeholder: 'Your message...',
    type: 'text',
    required: false,
    multiline: true,
  },
];

export const SIDEBAR = {
  heading: 'Get in touch',
  mailLabel: 'Mail:',
  locationLabel: 'Location:',
  location: 'Yerevan, Ye, AM',
  hoursHeading: 'Hours',
  hours: 'Monday - Saturday: 10:00am - 19:00pm',
};

export const MODAL_CONTENT = {
  title: 'Contact Form Temporarily Disabled',
  messagePrefix: 'Please reach out via email directly at',
};
