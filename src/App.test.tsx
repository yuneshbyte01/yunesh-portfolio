import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

window.scrollTo = () => {};

function renderAt(path = '/') {
  window.history.pushState({}, '', path);
  return render(<App />);
}

describe('Portfolio v2 application', () => {
  it('renders the homepage and backend engineering statement', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { name: 'Yunesh Timsina', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/secure, scalable backend systems/i)).toBeInTheDocument();
  });

  it('renders the main navigation routes', () => {
    renderAt('/');
    const navigation = screen.getByRole('navigation', { name: /primary/i });
    for (const label of ['Home', 'Projects', 'Experience', 'Skills', 'About', 'Contact']) {
      expect(navigation).toHaveTextContent(label);
    }
  });

  it('links to the existing resume asset', () => {
    renderAt('/');
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/Resume.pdf');
    expect(screen.getAllByRole('link', { name: 'Download CV' })[0]).toHaveAttribute('href', '/Resume.pdf');
  });

  it('links every featured project to its repository', () => {
    renderAt('/');
    const repositories = screen.getAllByRole('link', { name: /Source/i });
    expect(repositories).toHaveLength(3);
    expect(repositories[0]).toHaveAttribute('href', 'https://github.com/yuneshbyte01/digital-wallet-api');
    expect(repositories[1]).toHaveAttribute('href', 'https://github.com/yuneshbyte01/hamro-chalachitraghar-backend');
    expect(repositories[2]).toHaveAttribute('href', 'https://github.com/yuneshbyte01/spring-auth-template');
  });

  it('renders a not-found page for an unknown route', () => {
    renderAt('/route-that-does-not-exist');
    expect(screen.getByRole('heading', { name: 'Page not found.' })).toBeInTheDocument();
  });

  it('renders the projects page case studies', () => {
    renderAt('/projects');
    expect(screen.getByRole('heading', { name: 'Projects', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'HamroPaisa', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Hamro Chalchitraghar', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Spring Auth Template', level: 3 })).toBeInTheDocument();
    expect(screen.getByText('WanderWise')).toBeInTheDocument();
  });

  it('renders the experience timeline and engineering principles', () => {
    renderAt('/experience');
    expect(screen.getByRole('heading', { name: 'Experience', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Software Development Intern', level: 3 })).toBeInTheDocument();
    expect(screen.getByText('KK Smartways Pvt. Ltd.')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Engineering Principles', level: 2 })).toBeInTheDocument();
    expect(screen.getByText('Clean Architecture')).toBeInTheDocument();
  });

  it('renders the about page biography, journey, and education', () => {
    renderAt('/about');
    expect(screen.getByRole('heading', { name: 'About Me', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'My Journey', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Engineering Philosophy', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Education', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Current Focus', level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/Presidential Graduate School/i)).toBeInTheDocument();
  });

  it('renders the skills page technical categories and tags', () => {
    renderAt('/skills');
    expect(screen.getByRole('heading', { name: 'Skills', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Technical Skill Groups', level: 2 })).toBeInTheDocument();
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Spring Boot')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
  });

  it('renders the contact page details and validates empty forms', async () => {
    const user = userEvent.setup();
    renderAt('/contact');
    expect(screen.getByRole('heading', { name: 'Contact', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'yuneshtimsina@gmail.com' })).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: 'Send Message' });
    await user.click(submitBtn);

    expect(screen.getByText('Name is required.')).toBeInTheDocument();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
    expect(screen.getByText('Subject is required.')).toBeInTheDocument();
    expect(screen.getByText('Message is required.')).toBeInTheDocument();
  });

  it('renders the individual project case studies', () => {
    renderAt('/projects/hamropaisa');
    expect(screen.getByRole('heading', { name: 'HamroPaisa', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Double-Entry Ledger/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/WalletService.java/i)).toBeInTheDocument();

    renderAt('/projects/hamro-chalchitraghar');
    expect(screen.getByRole('heading', { name: 'Hamro Chalchitraghar', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Seat Locking Lifecycle/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/BookingService.java/i)).toBeInTheDocument();

    renderAt('/projects/spring-auth-template');
    expect(screen.getByRole('heading', { name: 'Spring Auth Template', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Stateless JWT Authentication/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/JwtTokenUtil.java/i)).toBeInTheDocument();
  });

  it('opens and closes the accessible mobile navigation menu', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const toggle = screen.getByRole('button', { name: 'Open navigation' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    expect(screen.getByRole('button', { name: 'Close navigation' })).toHaveAttribute('aria-expanded', 'true');
  });
});
