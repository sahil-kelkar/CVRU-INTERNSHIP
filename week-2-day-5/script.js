// ==========================================
// Week 2 - Day 5: Git & GitHub Collaboration
// Student: Sahil Kelkar | CVRU / AISECT
// ==========================================

// Function to copy git commands easily
function copyCommand(text, buttonElement) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = buttonElement.innerText;
            buttonElement.innerText = "✓ Copied!";
            buttonElement.classList.add("btn-copied");
            setTimeout(() => {
                buttonElement.innerText = originalText;
                buttonElement.classList.remove("btn-copied");
            }, 1500);
        }).catch(err => {
            console.error("Clipboard copy failed:", err);
        });
    }
}

// Interactive Branch Workflow Simulator (Task 3)
let currentStep = 0;
const branchSteps = [
    {
        title: "1. Create Branch",
        cmd: "git checkout -b feature-projects",
        desc: "Created and switched to new branch: 'feature-projects'",
        status: "Branch Active 🌿"
    },
    {
        title: "2. Stage & Commit Changes",
        cmd: "git add . && git commit -m \"Added projects section\"",
        desc: "Changes committed to local 'feature-projects' branch.",
        status: "Committed 💾"
    },
    {
        title: "3. Push Branch to GitHub",
        cmd: "git push origin feature-projects",
        desc: "Branch pushed to remote repository on GitHub.",
        status: "Pushed to GitHub 🚀"
    },
    {
        title: "4. Create PR & Merge into main",
        cmd: "PR #1: Merge feature-projects -> main",
        desc: "Pull request approved and merged into 'main'. Branch safely closed.",
        status: "Merged into Main 🎉"
    }
];

function nextBranchStep() {
    const statusBox = typeof document !== "undefined" ? document.getElementById("branchStatus") : null;
    const stepBox = typeof document !== "undefined" ? document.getElementById("currentBranchStep") : null;
    const progressFill = typeof document !== "undefined" ? document.getElementById("branchProgressFill") : null;

    currentStep = (currentStep + 1) % branchSteps.length;
    const step = branchSteps[currentStep];

    if (statusBox) statusBox.innerText = step.status;
    if (stepBox) {
        stepBox.innerHTML = `
            <strong>${step.title}</strong>
            <p>${step.desc}</p>
            <div class="cmd-pill"><code>${step.cmd}</code></div>
        `;
    }
    if (progressFill) {
        const percent = ((currentStep + 1) / branchSteps.length) * 100;
        progressFill.style.width = `${percent}%`;
    }

    console.log(`Step ${currentStep + 1}: ${step.title} | ${step.cmd}`);
}

function resetBranchSimulation() {
    currentStep = -1;
    nextBranchStep();
}

// Auto-run in Node.js for CLI testing
if (typeof window === "undefined") {
    console.log("==================================================");
    console.log(" Week 2 - Day 5: Git & GitHub Workflow (Node)");
    console.log("==================================================");
    branchSteps.forEach((s, i) => {
        console.log(`[Step ${i + 1}] ${s.title}: ${s.cmd}`);
    });
    console.log("All Git task workflows ready!");
}
