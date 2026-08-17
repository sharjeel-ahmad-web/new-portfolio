declare module "nodemailer" {
  export interface SendMailOptions {
    from?: string;
    to?: string;
    subject?: string;
    html?: string;
    text?: string;
    priority?: string;
    [key: string]: unknown;
  }

  export interface Transporter {
    sendMail: (options: SendMailOptions) => Promise<{ response?: string; envelope?: unknown }>;
  }

  export interface TransportOptions {
    service?: string;
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: {
      user?: string;
      pass?: string;
    };
    [key: string]: unknown;
  }

  export function createTransport(options: TransportOptions | string): Transporter;
  export default { createTransport };
}
