# Customer Support Process - Mindhello

## Overview

Dit document beschrijft het volledige customer support proces voor Mindhello.

---

## 1. Contact Flow

```
[Gebruiker] → [Contact Form Website] → [Database/Firestore] → [Support Dashboard]
                    ↓
              [5 min wachten]
                    ↓
        [Automatische bevestigingsmail]
                    ↓
            [Support Team Review]
                    ↓
          [Antwoord binnen 24-48h]
```

---

## 2. Contact Formulier (Website)

### Velden:
- **Name** (verplicht)
- **Email** (verplicht)
- **Company** (optioneel)
- **Reason** (dropdown):
  - General Inquiry
  - Sales & Enterprise
  - Technical Support
  - Partnership
  - Feedback
- **Message** (verplicht)

### Na Submit:
1. Data wordt opgeslagen in Firestore (`support_tickets` collection)
2. Gebruiker ziet "Message sent!" bevestiging
3. Trigger voor automatische email wordt gestart

---

## 3. Automatische Bevestigingsmail

### Timing:
- Verzonden **5 minuten** na form submit

### Afzender:
- `noreply@mindhello.ai`

### Onderwerp:
- "We've received your message - Mindhello Support"

### Template:

```
Subject: We've received your message - Mindhello Support

Hi [Name],

Thank you for reaching out to Mindhello!

We've received your message and our team is reviewing it. Due to high 
volume, please expect a response within 24-48 hours during business days.

Your ticket details:
- Ticket ID: #[TICKET_ID]
- Submitted: [DATE_TIME]
- Category: [REASON]

If your issue is urgent, please reply to this email with "URGENT" in 
the subject line.

Best regards,
The Mindhello Team

---
This is an automated message. Please do not reply directly to this email.
For updates, check your inbox for a response from our support team.
```

---

## 4. Firestore Structure

### Collection: `support_tickets`

```typescript
interface SupportTicket {
  id: string;              // Auto-generated
  name: string;
  email: string;
  company?: string;
  reason: 'general' | 'sales' | 'support' | 'partnership' | 'feedback';
  message: string;
  status: 'new' | 'in_progress' | 'waiting_response' | 'resolved' | 'closed';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  confirmationSent: boolean;
  confirmationSentAt?: Timestamp;
  assignedTo?: string;     // Team member ID
  responses: Response[];
  metadata: {
    userAgent: string;
    ip?: string;
    source: 'website' | 'email' | 'other';
  }
}

interface Response {
  id: string;
  from: 'support' | 'customer';
  message: string;
  createdAt: Timestamp;
  sentBy?: string;         // Team member name/ID
}
```

---

## 5. Priority Levels

| Priority | Response Time | Criteria |
|----------|--------------|----------|
| Urgent | 4 hours | Payment issues, account locked, data loss |
| High | 12 hours | Service outage, bug affecting work |
| Normal | 24-48 hours | General questions, feature requests |
| Low | 72 hours | Feedback, suggestions |

### Auto-assign Priority:
- **Sales & Enterprise** → High
- **Technical Support** → Normal (upgrade to High if contains "not working", "bug", "error")
- **Partnership** → Normal
- **General Inquiry** → Normal
- **Feedback** → Low

---

## 6. N8N Workflow (Backend)

### Workflow: "Support - Auto Confirmation"

**Trigger:** Firestore document created in `support_tickets`

**Steps:**
1. Wait 5 minutes (Delay node)
2. Generate ticket ID
3. Format email template
4. Send email via SendGrid/Resend (from noreply@mindhello.ai)
5. Update Firestore: `confirmationSent: true`, `confirmationSentAt: now()`

### Workflow: "Support - Notification"

**Trigger:** Firestore document created in `support_tickets`

**Steps:**
1. Check priority level
2. If High/Urgent: Send Slack notification to #support channel
3. Send daily digest email with new tickets summary

---

## 7. Support Dashboard (Toekomst)

### Features:
- [ ] Ticket overzicht met filters (status, priority, reason)
- [ ] Ticket detail view met conversation history
- [ ] Quick reply templates
- [ ] Assign to team member
- [ ] Status updates
- [ ] Analytics (response time, volume, satisfaction)

### Access:
- `/admin/support` (protected route)
- Only accessible by team members with `role: 'admin'` or `role: 'support'`

---

## 8. Email Setup Vereisten

### Domein Configuratie:
1. **SPF Record**: Allow SendGrid/Resend to send on behalf of mindhello.ai
2. **DKIM**: Configure for email authentication
3. **DMARC**: Set policy for email deliverability

### Email Adressen:
- `noreply@mindhello.ai` - Automatische mails (geen replies accepteren)
- `support@mindhello.ai` - Team replies naar klanten

---

## 9. Metrics & KPIs

| Metric | Target |
|--------|--------|
| First Response Time | < 24 hours |
| Resolution Time | < 72 hours |
| Customer Satisfaction | > 4.5/5 |
| Ticket Volume | Monitor trends |

---

## 10. Escalatie Protocol

1. **Tier 1**: Algemene vragen, FAQ, basic troubleshooting
2. **Tier 2**: Technische issues, account problemen
3. **Tier 3**: Developers (bugs, API issues)
4. **Management**: Enterprise deals, legal, refunds > €100

---

## Implementatie Checklist

- [ ] Firestore collection `support_tickets` aanmaken
- [ ] N8N workflow voor auto-confirmation
- [ ] Email domein configureren (SPF, DKIM, DMARC)
- [ ] SendGrid/Resend account setup
- [ ] Email templates ontwerpen
- [ ] Slack integration voor notificaties
- [ ] Support dashboard bouwen (later)

---

*Last updated: January 2026*
