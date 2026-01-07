import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type SocialLink = {
  label: string;
  url: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
};

type Project = {
  name: string;
  description: string;
  skills: string[];
  link?: string;
};

type Education = {
  institution: string;
  degree: string;
  period: string;
  details: string;
};


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class HomeComponent {
  // ===== Identity =====
  name = 'Chystiakova Daria';
  title = 'Full-Stack Web Developer';
  location = 'Larnaca, Cyprus';
  phone = '+357 96 938 736';
  email = 'dchystiakova@uclan.ac.uk';

  // ===== Core Skills =====
  skills = signal([
    'Angular v21',
    'TypeScript',
    'JavaScript',
    'Frontend Development',
    'Backend Development',
    'UI / UX Design',
  ]);

  languages = signal([
    { name: 'Russian', level: 'Native / Bilingual' },
    { name: 'Ukrainian', level: 'Native / Bilingual' },
    { name: 'English', level: 'Professional Working Proficiency' },
  ]);

  // ===== Experience =====
  experiences = signal<Experience[]>([
    {
      company: 'mMedcon',
      role: 'Web Developer',
      period: 'November 2025 – Present',
      description:
        'Working on adding new features, deploying and optimizing the application in a production environment.',
      skills: ['TypeScript', 'Angular', 'Python', 'Web Frameworks'],
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      period: 'September 2023 – Present',
      description:
        'Developed multiple full-stack projects for various clients. Several projects are included in my GitHub portfolio.',
      skills: [
        'JavaScript',
        'TypeScript',
        'Angular v21',
        'Python',
        'Java / Kotlin',
        'Spring Boot',
        'ASP.NET',
        'C#',
      ],
    },
    {
      company: 'JetBrains',
      role: 'Frontend Developer',
      period: 'February 2025 – July 2025',
      description:
        'Worked on frontend features and visualizations using modern tooling.',
      skills: ['TypeScript', 'React', 'three.js', 'Vite', 'Kotlin'],
    },
    {
      company: 'Robotex',
      role: 'Programming Tutor',
      period: 'July 2024 – December 2024',
      description:
        'Organized and conducted online programming lessons and events.',
      skills: ['Python', 'Lua', 'Public Speaking', 'Teaching'],
    },
    {
      company: 'Academy of Elegance',
      role: 'CRM Specialist',
      period: 'May 2023 – September 2023',
      description:
        'Worked with customers to onboard them and ensure smooth use of company services.',
      skills: ['Customer Relations', 'Sales', 'Communication'],
    },
    {
      company: 'Trivia',
      role: 'Game Developer',
      period: 'May 2023 – October 2023',
      description:
        'Developed an Android quiz game using Java and Android Studio.',
      skills: ['Java', 'Android Studio', 'UI / UX Design'],
    },
  ]);

  // ===== Projects =====
  projects = signal<Project[]>([
    {
      name: 'Cyprus Timber Crafts',
      description: 'Official company website.',
      skills: ['TypeScript', 'Svelte', 'Vite.js', 'Project Management'],
      link: 'https://ctc.cy',
    },
    {
      name: 'E-commerce University Store',
      description: 'University store web application.',
      skills: ['PHP', 'MVC', 'MySQL', 'UI / UX Design'],
    },
    {
      name: 'RISE IDE',
      description: 'Cross-platform full-featured IDE.',
      skills: ['Rust', 'TypeScript', 'Tauri'],
    },
  ]);

  // ===== Education =====
  education = signal<Education[]>([
    {
      institution: 'University of Central Lancashire Cyprus',
      degree: 'BSc (Hons) Computing',
      period: 'October 2022 – July 2026',
      details: 'GPA 80+',
    },
  ]);

  // ===== Social =====
  socialLinks = signal<SocialLink[]>([
    {
      label: 'GitHub',
      url: 'https://github.com/breadoorr',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/daria-chystiakova-31331a26b',
    },
    {
      label: 'Email',
      url: 'mailto:dchystiakova@uclan.ac.uk',
    },
  ]);

  // ===== Computed (Angular v21 showcase) =====
  totalYearsOfExperience = computed(() => {
    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  });
}
