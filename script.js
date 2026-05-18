document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Tab Switching Functionality
    // ==========================================
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active classes
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Add active class to current button
            button.classList.add("active");

            // Add active class to matching tab content
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });

    // ==========================================
    // 2. Code Copy to Clipboard Functionality
    // ==========================================
    const copyButton = document.getElementById("copy-btn");
    const codeElement = document.querySelector("pre code");

    copyButton.addEventListener("click", () => {
        const codeText = codeElement.textContent;

        navigator.clipboard.writeText(codeText)
            .then(() => {
                // Success State
                copyButton.innerHTML = '<i class="fas fa-check"></i> 복사 완료!';
                copyButton.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)"; // Emerald green gradient
                copyButton.style.boxShadow = "0 4px 20px rgba(16, 185, 129, 0.4)";

                // Revert after 2 seconds
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="far fa-copy"></i> 코드 복사하기';
                    copyButton.style.background = ""; // Reverts to CSS default
                    copyButton.style.boxShadow = "";
                }, 2000);
            })
            .catch(err => {
                console.error("클립보드 복사 실패: ", err);
                alert("코드를 복사하지 못했습니다. 수동으로 드래그하여 복사해 주세요.");
            });
    });
});
