import { describe, it, expect } from 'vitest'
import { meta, techStack, experience, projects, certifications } from '../data.js'

// ── meta tests ────────────────────────────────────────────────
describe('meta', () => {
  it('has correct name', () => {
    expect(meta.name).toBe('Kratik Rathi')
  })

  it('has correct initials', () => {
    expect(meta.initials).toBe('KR')
  })

  it('has 3 roles', () => {
    expect(meta.roles).toHaveLength(3)
  })

  it('has valid email', () => {
    expect(meta.email).toContain('@')
  })

  it('has all required links', () => {
    expect(meta.links.linkedin).toContain('linkedin.com')
    expect(meta.links.github).toContain('github.com')
    expect(meta.links.resume).toContain('.pdf')
  })

  it('tagline has parts array', () => {
    expect(meta.tagline.parts).toBeDefined()
    expect(meta.tagline.parts.length).toBeGreaterThan(0)
  })
})

// ── techStack tests ───────────────────────────────────────────
describe('techStack', () => {
  it('has 8 categories', () => {
    expect(techStack).toHaveLength(8)
  })

  it('every category has a name and tags', () => {
    techStack.forEach(group => {
      expect(group.category).toBeTruthy()
      expect(group.tags.length).toBeGreaterThan(0)
    })
  })

  it('Python is in Programming Languages', () => {
    const prog = techStack.find(g => g.category === 'Programming Languages')
    expect(prog.tags).toContain('Python')
  })

  it('LangChain is in Generative AI & LLMs', () => {
    const ai = techStack.find(g => g.category === 'Generative AI & LLMs')
    expect(ai.tags).toContain('LangChain')
  })
})

// ── experience tests ──────────────────────────────────────────
describe('experience', () => {
  it('has 7 jobs', () => {
    expect(experience).toHaveLength(7)
  })

  it('every job has required fields', () => {
    experience.forEach(job => {
      expect(job.company).toBeTruthy()
      expect(job.role).toBeTruthy()
      expect(job.date).toBeTruthy()
      expect(job.bullets.length).toBeGreaterThan(0)
    })
  })

  it('most recent job is Project 990', () => {
    expect(experience[0].company).toBe('Project 990 Inc.')
  })

  it('all jobs have logoFallback', () => {
    experience.forEach(job => {
      expect(job.logoFallback).toBeTruthy()
    })
  })
})

// ── projects tests ────────────────────────────────────────────
describe('projects', () => {
  it('has 5 projects', () => {
    expect(projects).toHaveLength(5)
  })

  it('every project has name, desc, tags and date', () => {
    projects.forEach(p => {
      expect(p.name).toBeTruthy()
      expect(p.desc).toBeTruthy()
      expect(p.date).toBeTruthy()
      expect(p.tags.length).toBeGreaterThan(0)
    })
  })

  it('all project links have label and url', () => {
    projects.forEach(p => {
      p.links.forEach(l => {
        expect(l.label).toBeTruthy()
        expect(l.url).toContain('http')
      })
    })
  })
})

// ── certifications tests ──────────────────────────────────────
describe('certifications', () => {
  it('has at least 1 issuer', () => {
    expect(certifications.length).toBeGreaterThan(0)
  })

  it('AWS cert exists', () => {
    const aws = certifications.find(c => c.issuer === 'Amazon Web Services')
    expect(aws).toBeDefined()
    expect(aws.items[0].code).toBe('CLF-C02')
  })

  it('every cert has code, name and date', () => {
    certifications.forEach(issuer => {
      issuer.items.forEach(cert => {
        expect(cert.code).toBeTruthy()
        expect(cert.name).toBeTruthy()
        expect(cert.date).toBeTruthy()
      })
    })
  })
})
