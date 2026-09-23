"use client";

import { track } from "@vercel/analytics";

export function trackProjectView(project: string) {
  track("project_view", {
    project,
  });
}

export function trackCVDownload() {
  track("cv_download");
}

export function trackLinkedIn() {
  track("linkedin_click");
}

export function trackGitHub() {
  track("github_click");
}

export function trackContact() {
  track("contact_submit");
}
