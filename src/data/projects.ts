import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    slug: 'hamropaisa',
    name: 'HamroPaisa',
    type: 'Digital Wallet & Money Transfer API',
    summary: 'A production-style fintech backend supporting wallet management, peer-to-peer transfers, double-entry ledger accounting, secure authentication, and auditable financial transactions.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    highlights: ['JWT and refresh tokens', 'Idempotent transfers', 'Optimistic locking', 'Rate limiting', 'Audit logging'],
    repository: 'https://github.com/yuneshbyte01/digital-wallet-api',
  },
  {
    slug: 'hamro-chalchitraghar',
    name: 'Hamro Chalchitraghar',
    type: 'Movie Ticket Booking System',
    summary: 'A backend platform for movie discovery, show scheduling, seat availability, booking workflows, payment lifecycle management, and ticket delivery.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security'],
    highlights: ['Booking workflow', 'Seat management', 'Payment lifecycle', 'Email ticket delivery', 'Integration testing'],
    repository: 'https://github.com/yuneshbyte01/hamro-chalachitraghar-backend',
  },
  {
    slug: 'spring-auth-template',
    name: 'Spring Auth Template',
    type: 'JWT Authentication System',
    summary: 'A reusable Spring Boot authentication foundation with JWT access tokens, refresh-token handling, Spring Security, and role-based endpoint authorization.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
    highlights: ['JWT access tokens', 'Refresh tokens', 'Role-based access control', 'Modular architecture'],
    repository: 'https://github.com/yuneshbyte01/spring-auth-template',
  },
];
