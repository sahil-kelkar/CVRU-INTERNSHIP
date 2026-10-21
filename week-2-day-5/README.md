# Week 2 - Day 5: Git & GitHub Collaboration (Simple Guide)

**Student:** Sahil Kelkar  
**Institution:** Dr. C. V. Raman University (CVRU), Khandwa (M.P.) / AISECT Infotech  

---

## 📌 Hands-on Tasks & Step-by-Step Solutions

### Task 1 – Initialize Portfolio Repo

Open your portfolio folder (`day-6 mini project` or portfolio project) in terminal and run:

```bash
# 1. Initialize Git in project directory
git init

# 2. Stage all project files
git add .

# 3. Create initial commit
git commit -m "Initial Portfolio Commit"

# 4. Set default branch to main
git branch -M main

# 5. Link to your GitHub repository
git remote add origin https://github.com/sahil-kelkar/portfolio.git

# 6. Push local files to GitHub
git push -u origin main
```

---

### Task 2 – Invite a Peer (Collaborator)

To give a classmate access to work on your repository:
1. Open your repository on **GitHub**.
2. Click on the **Settings** tab at the top.
3. In the left sidebar, click **Collaborators**.
4. Click **Add people** button.
5. Enter your classmate's GitHub username and send the invite.
6. The peer accepts the invitation from their email or GitHub notifications.

---

### Task 3 – Create and Merge a Feature Branch

To update code safely without breaking the main branch:

```bash
# 1. Create and switch to a new branch
git checkout -b feature-projects

# 2. Add or modify project section in HTML/CSS

# 3. Stage changes
git add .

# 4. Commit changes
git commit -m "Added projects section"

# 5. Push feature branch to GitHub
git push origin feature-projects
```

**Merge on GitHub:**
1. Go to your repository on GitHub.
2. Click **Compare & pull request** on the yellow banner.
3. Review changes and click **Create Pull Request**.
4. Click **Merge pull request** -> **Confirm merge**.
5. The `feature-projects` branch is now successfully merged into `main`.

---

### Bonus Challenge – Collaborate Like a Team (Fork & PR)

Real-world Open Source / Team Workflow:
1. **Fork:** Go to your partner's GitHub repo and click the **Fork** button (creates your own copy).
2. **Clone:** Clone your forked repo: `git clone <your-fork-url>`.
3. **Branch:** Create a branch: `git checkout -b improve-styles`.
4. **Edit & Commit:** Make a small improvement (color, padding, or section), then run:
   ```bash
   git add .
   git commit -m "Improved color scheme and card padding"
   git push origin improve-styles
   ```
5. **Pull Request:** Open your GitHub fork, click **Contribute** -> **Open Pull Request**, and submit it to your partner's original repo.
6. Your partner reviews and merges the PR.

---

## 🚀 How to Run the Interactive Guide

Open [index.html](file:///Users/sahilkelkar/sahil%20internship/week-2-day-5/index.html) in your browser:
- Click **Copy** next to any Git command to quickly copy it to clipboard.
- Use the **Interactive Branch Lifecycle Simulator** in Task 3 to step through the branching process.
