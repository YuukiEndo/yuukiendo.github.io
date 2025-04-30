"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "jp"

type Translations = {
  [key: string]: {
    en: string
    jp: string
  }
}

// Add your translations here
const translations: Translations = {
  // Navigation
  "nav.home": {
    en: "Home",
    jp: "ホーム",
  },
  "nav.projects": {
    en: "Projects",
    jp: "プロジェクト",
  },
  "nav.blog": {
    en: "Blog",
    jp: "ブログ",
  },
  "nav.contact": {
    en: "Contact",
    jp: "お問い合わせ",
  },

  // Home page
  "home.title": {
    en: "Game Programmer",
    jp: "ゲームプログラマー",
  },
  "home.description": {
    en: "Passionate game developer with expertise in creating immersive gaming experiences. Fluent in Japanese and English.",
    jp: "ゲームを作るのも遊ぶのも大好きなプログラマー。いつか皆さんに遊んでもらえるようなゲームを作りたいです。",
  },
  "home.viewProjects": {
    en: "View My Projects",
    jp: "プロジェクト覧",
  },
  "home.contactMe": {
    en: "Contact Me",
    jp: "お問い合わせ",
  },

  // Skills section
  "skills.title": {
    en: "Skills",
    jp: "特技",
  },
  "skills.subtitle": {
    en: "Technical expertise and tools I work with",
    jp: "使ったことあるsoftwareやプログラム",
  },
  "skills.languages": {
    en: "Languages:",
    jp: "言語:",
  },

  // Projects section
  "projects.title": {
    en: "Featured Projects",
    jp: "自信作",
  },
  "projects.subtitle": {
    en: "Check out some of my recent game development work",
    jp: "最近のプロジェクト",
  },
  "projects.viewAll": {
    en: "View All Projects",
    jp: "すべてのプロジェクトを見る",
  },
  "projects.viewProject": {
    en: "View Project",
    jp: "プロジェクトを見る",
  },

  // Blog section
  "blog.title": {
    en: "Latest from the Blog",
    jp: "ブログ",
  },
  "blog.subtitle": {
    en: "Thoughts and insights on game development",
    jp: "ゲーム開発についての考えと洞察",
  },
  "blog.readMore": {
    en: "Read More Articles",
    jp: "もっと記事を読む",
  },

  // Contact section
  "contact.title": {
    en: "Get in Touch",
    jp: "お問い合わせ",
  },
  "contact.subtitle": {
    en: "Interested in working together? Let's connect!",
    jp: "連絡先",
  },
  "contact.contactPage": {
    en: "Contact Page",
    jp: "お問い合わせページ",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved.",
    jp: "全著作権所有。",
  },

  // Project descriptions
  "project.molementum.description": {
    en: "Physics-based party game where you compete with your friends to become the best Mole Thief! Made using Unity and has functioning online multiplayer.",
    jp: "カスタム物理エンジンのパーティーゲーム。友達と競い合って最高のモグラ泥棒になろう！Unityで作られており、オンラインマルチプレイヤー機能が実装されています。",
  },
  "project.hellOfABullet.description": {
    en: "Bullet-Hell game, created with a self created game engine using Allegro",
    jp: "ブレットヘルゲーム、Allegroを使った自作ゲームエンジンを使っています",
  },
  "project.horseNamedFriday.description": {
    en: "Western Horror game made in Unity. Worked on enemy AI and designer friendly tools.",
    jp: "PS2グラフィックスのホラーゲーム、Unity での敵AIを作りました",
  },
  "project.tanksALot.description": {
    en: "3D turn based tank game made in Unity. Easily editable bullet classes created for easy addition of new features.",
    jp: "３D 戦車ゲーム、簡単に新しい弾丸の種類を作れるようにできてます",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language] || translations[key].en
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
