import type { ContactMessage } from "../entities/contact-message";

export interface ContactRepository {
  save(message: ContactMessage): Promise<void>;
}
