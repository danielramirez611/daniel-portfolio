import { createSupabaseAdmin } from "@/lib/supabase/admin";

import type { ContactMessage } from "../domain/entities/contact-message";
import type { ContactRepository } from "../domain/repositories/contact.repository";

export class SupabaseContactRepository implements ContactRepository {
  async save(message: ContactMessage): Promise<void> {
    const supabase = createSupabaseAdmin();

    const { error } = await supabase.from("contact_messages").insert({
      name: message.name,
      email: message.email,
      subject: message.subject ?? null,
      message: message.message,
    });

    if (error) {
      console.error("SUPABASE INSERT ERROR:", error);

      throw new Error(`Supabase error: ${error.message}`);
    }
  }
}
