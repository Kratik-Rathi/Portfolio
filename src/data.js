export const meta = {
  name:     'Kratik Rathi',
  initials: 'KR',
  roles:    ['Data Engineer', 'Data Analyst', 'AI Systems Builder'],
  tagline: {
    parts: [
      { text: 'Data Engineer', color: '#34d399' },
      { text: ' and ' },
      { text: 'Analyst', color: '#38bdf8' },
      { text: ', with Experience Building ' },
      { text: 'AI Systems', color: '#f472b6' },
      { text: '.' },
    ]
  },
  bio:      'Data Engineer and Analyst who builds production AI systems — ETL pipelines handling 15M+ records, RAG applications using Claude API and LangChain, and analytics dashboards used by real grant makers and transit planners. M.S. Data Science · Indiana University · AWS Certified.',
  location: 'Chicago, IL',
  degree:   'M.S. Data Science · Indiana University Bloomington',
  stack:    'Python · SQL · LangChain · RAG',
  email:    'rathi.kratik08@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/kratikrathi/',
    github:   'https://github.com/Kratik-Rathi',
    tableau:  'https://public.tableau.com/app/profile/kratik.rathi/vizzes',
    resume:   '/assets/resume/Kratik_Rathi_Resume.pdf',
  },
  platforms: ['Python', 'LangChain', 'AWS', 'GCP', 'Claude API', 'Tableau'],
}

export const pipeline = {
  sources: [
    { label: 'IRS / Gov Records',   sub: '15M+ tax records' },
    { label: 'Video / Social APIs', sub: 'TikTok · YouTube' },
    { label: 'Legal Docs / Forms',  sub: 'BeautifulSoup scraping' },
    { label: 'GPS / APC Sensors',   sub: 'Transit data' },
  ],
  processing: [
    { label: 'Python ETL',         sub: 'Pandas · Alteryx · DuckDB' },
    { label: 'RAG Pipelines',      sub: 'LangChain · Milvus · FAISS' },
    { label: 'ML / Deep Learning', sub: 'Scikit-learn · PyTorch · CNN' },
    { label: 'Cloud Functions',    sub: 'AWS Lambda · GCP BigQuery' },
  ],
  destinations: [
    { label: 'Dashboards',      sub: 'Tableau · Power BI · Looker' },
    { label: 'AI Interfaces',   sub: 'Streamlit · FastAPI · React' },
    { label: 'Data Warehouses', sub: 'PostgreSQL · Snowflake · BQ' },
    { label: 'ML Endpoints',    sub: 'Docker · AWS EC2 · GCP' },
  ],
}

export const experience = [
  {
    company: 'Project 990 Inc.',
    logo: '/assets/logos/project990_logo.jpg', logoFallback: 'P9', logoColor: '#0891b2',
    role: 'Data Scientist', type: 'Full-time',
    date: 'October 2025 – Present',
    bullets: [
      'Consolidated 15M+ IRS grant records into production via a Python ETL pipeline — zero duplicate ingestion, full audit traceability.',
      'Rebuilt a Tableau dashboard with Plotly, React and FastAPI on AWS EC2 — reducing load time from 5 seconds to 90 ms on 2M+ records.',
      'Architected a DuckDB analytical layer with B-tree indexing and caching, reducing backend query response to 30 ms.',
      'Delivered Tableau dashboards visualizing 750K+ U.S. nonprofits for grant makers, enabling national-to-city drill-down.',
    ],
  },
  {
    company: 'Indiana University Bloomington',
    logo: '/assets/logos/Indiana-University-Symbol.png', logoFallback: 'IU', logoColor: '#7b0000',
    role: 'Associate Instructor', type: 'Part-time',
    date: 'May 2025 – May 2026',
    bullets: [
      'Delivered NLP and Database lectures to 40+ graduate students — transformers, LLMs, prompt engineering, advanced databases.',
      'Earned a 90% student recommendation rate; managed grading and course logistics across two semesters.',
    ],
  },
  {
    company: 'Genmark AI Inc.',
    logo: '/assets/logos/genmarkai_logo.jpg', logoFallback: 'GA', logoColor: '#059669',
    role: 'Software Engineer Intern', type: 'Internship',
    date: 'July 2025 – August 2025',
    bullets: [
      'Built a RAG application using Claude API, LangChain and Milvus — Dockerized Streamlit deploy enabling 60% faster content generation.',
      'Built a TikTok trend analysis tool with Whisper and Google Veo 2, cutting video creation to under 5 minutes.',
      'Recognized as Most Innovative Project across the internship cohort.',
    ],
  },
  {
    company: 'Indiana University – Indiana Innocence Project',
    logo: '/assets/logos/Indiana-University-Symbol.png', logoFallback: 'IU', logoColor: '#7b0000',
    role: 'Research Assistant', type: 'Part-time',
    date: 'January 2025 – May 2025',
    bullets: [
      'Built a Python + BeautifulSoup ingestion pipeline into PostgreSQL — cutting manual data entry from 30 min to 1 min.',
      'Designed a Looker Studio dashboard to prioritize review of 200+ legal cases by timeline and severity.',
    ],
  },
  {
    company: 'Swastika Investmart Ltd.',
    logo: '/assets/logos/swastikainvestmart.png', logoFallback: 'SI', logoColor: '#7c3aed',
    role: 'Data Analyst Intern', type: 'Internship',
    date: 'January 2024 – July 2024',
    bullets: [
      'Built an analytics pipeline (Python, Flask, SQL, cron) on 50K+ lead records — boosted conversions 20%, cut reporting effort 90%.',
      'Engineered a Docker-based scheduler with Prometheus logging — cut debugging time by 60%.',
    ],
  },
  {
    company: 'Mahindra & Mahindra Ltd.',
    logo: '/assets/logos/Mahindra.jpg', logoFallback: 'M&M', logoColor: '#dc2626',
    role: 'Data Analyst Intern', type: 'Internship',
    date: 'January 2023 – April 2023',
    bullets: [
      'Built ARIMAX/SARIMAX time-series model predicting financial trends with 87% accuracy on 20 years of monthly data.',
      'Processed 30K+ records across 20+ car models for part cross-utilization and cost optimization analysis.',
    ],
  },
  {
    company: 'Tech Mahindra Ltd.',
    logo: '/assets/logos/Tech_Mahindra-Logo.png', logoFallback: 'TM', logoColor: '#ea580c',
    role: 'Data Analyst Intern', type: 'Internship',
    date: 'June 2022 – August 2022',
    bullets: [
      'Cleaned CRM data and built Tableau dashboards delivering real-time visibility of customer deliverables.',
    ],
  },
]

export const techStack = [
  { category: 'Programming Languages', tags: ['Python', 'SQL', 'R'] },
  { category: 'Databases & Warehousing', tags: ['Snowflake', 'BigQuery', 'MySQL', 'PostgreSQL', 'MS SQL Server', 'MongoDB', 'DuckDB'] },
  { category: 'Cloud Platforms & Big Data', tags: ['AWS', 'GCP', 'Databricks', 'Apache Spark', 'Docker'] },
  { category: 'ETL & Data Visualization', tags: ['Alteryx', 'Tableau', 'Power BI (DAX)', 'Looker Studio', 'Plotly', 'Streamlit', 'Excel'] },
  { category: 'Libraries & Frameworks', tags: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Keras', 'OpenCV', 'Matplotlib', 'Seaborn', 'Flask', 'Airflow'] },
  { category: 'Generative AI & LLMs', tags: ['LangChain', 'RAG', 'FAISS', 'Milvus', 'Whisper', 'Hugging Face', 'NLP'] },
  { category: 'Machine Learning', tags: ['Regression Models', 'XGBoost', 'Random Forest', 'SVM', 'K-Means', 'GMM', 'CNN', 'Feature Engineering', 'Statistical Modeling'] },
  { category: 'Development Tools', tags: ['Git', 'GitHub', 'GitLab', 'Docker', 'CI/CD', 'REST APIs', 'FastAPI', 'Postman', 'React'] },
]

export const projects = [
  {
    name: 'California Live Wildfire Analytics Dashboard',
    date: 'December 2025',
    desc: 'Real-time wildfire analytics on an AWS Lambda + S3 + BigQuery ETL pipeline with 2.5-second end-to-end runtime. Tableau dashboard tracks CAL FIRE incidents across all 58 California counties since 2017.',
    tags: ['AWS Lambda', 'S3', 'BigQuery', 'Tableau', 'ETL'],
    links: [
      { label: 'Tableau', url: 'https://public.tableau.com/app/profile/kratik.rathi/vizzes' },
      { label: 'GitHub',  url: 'https://github.com/Kratik-Rathi/Calfire-Analysis-Dashboard' },
    ],
  },
  {
    name: 'IndyGo Ridership Dashboard',
    date: 'May 2025',
    desc: 'Interactive Power BI dashboard using DAX to surface weekday vs. weekend travel patterns, stop-level passenger flows and route-level KPIs across 35K+ validated GPS and APC records.',
    tags: ['Power BI', 'DAX', 'GPS Data', 'APC Records'],
    links: [{ label: 'GitHub', url: 'https://github.com/Kratik-Rathi/Power-BI-Dashboards/tree/main/Client%20Project%20-%20IndyGo%20Ridership' }],
  },
  {
    name: 'DocuVerse — RAG Document Chatbot',
    date: 'January 2025',
    desc: 'LangChain + FAISS + Hugging Face embeddings for semantic document retrieval. Integrated Gemma 2 for context-aware Q&A — reducing manual review time by 80%. Deployed on Streamlit.',
    tags: ['LangChain', 'FAISS', 'Gemma 2', 'Streamlit', 'RAG'],
    links: [
      { label: 'GitHub',  url: 'https://github.com/Kratik-Rathi' },
      { label: 'Project', url: 'https://docuverse-kratikrathi.streamlit.app/' },
    ],
  },
  {
    name: 'Breast Cancer Classification',
    date: '2024',
    desc: 'ML pipeline using XGBoost, Random Forest and CNN with feature engineering and statistical validation on breast cancer imaging data.',
    tags: ['XGBoost', 'CNN', 'Scikit-learn', 'PyTorch'],
    links: [{ label: 'GitHub', url: 'https://github.com/Kratik-Rathi/Breast-Cancer-Classification' }],
  },
  {
    name: 'Lung X-ray Classification',
    date: '2024',
    desc: 'CNN-based model classifying lung X-rays into COVID-19, Normal, and Pneumonia using K-Means Clustering and deep learning on medical imaging data.',
    tags: ['CNN', 'K-Means', 'Deep Learning', 'Medical Imaging'],
    links: [{ label: 'GitHub', url: 'https://github.com/Kratik-Rathi/Lung-Xray-Classification-Covid19-Normal-Pneumonia-' }],
  },
]

export const certifications = [
  {
    issuer: 'Amazon Web Services',
    count: 1,
    items: [
      { code: 'CLF-C02', name: 'AWS Certified Cloud Practitioner', date: 'January 2026' },
    ],
  },
]
