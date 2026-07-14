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
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute('href', '/Resume.pdf');
  });

  it('links every featured project to its repository', () => {
    renderAt('/');
    const repositories = screen.getAllByRole('link', { name: /GitHub repository/i });
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

  it('opens and closes the accessible mobile navigation menu', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const toggle = screen.getByRole('button', { name: 'Open navigation' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    expect(screen.getByRole('button', { name: 'Close navigation' })).toHaveAttribute('aria-expanded', 'true');
  });
});
