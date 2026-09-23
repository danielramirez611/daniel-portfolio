import type { ContactMessage } from "../domain/entities/contact-message";
import type { ContactRepository } from "../domain/repositories/contact.repository";

export class SendContactMessage {
  constructor(private readonly repository: ContactRepository) {}

  async execute(message: ContactMessage): Promise<void> {
    await this.repository.save(message);
  }
}
