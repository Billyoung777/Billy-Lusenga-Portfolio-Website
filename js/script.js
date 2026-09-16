const header = document.querySelector(".site-header");
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

window.addEventListener("scroll", () =>
  header?.classList.toggle("scrolled", window.scrollY > 20),
);
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav
  ?.querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

// Certificate PDF viewer
const certificateModal = document.getElementById("certificateModal");
const certificatePdf = document.getElementById("certificatePdf");
const certificateTitle = document.getElementById("certificateModalTitle");
const certificateDownload = document.getElementById("certificateDownload");
const certificateFallback = document.getElementById("certificateFallback");
let lastFocusedCertificateButton = null;

const closeCertificate = () => {
  if (!certificateModal) return;
  certificateModal.classList.remove("open");
  certificateModal.setAttribute("aria-hidden", "true");
  certificatePdf?.setAttribute("data", "");
  certificatePdf?.removeAttribute("data");
  if (certificateDownload) certificateDownload.removeAttribute("href");
  if (certificateFallback) certificateFallback.removeAttribute("href");
  document.body.style.overflow = "";
  lastFocusedCertificateButton?.focus();
};

document.querySelectorAll("[data-certificate]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!certificateModal || !certificatePdf) return;
    const file = button.dataset.certificate;
    const title = button.dataset.title || "Certificate";
    lastFocusedCertificateButton = button;
    certificateTitle.textContent = title;
    certificatePdf.setAttribute("data", file);
    certificateDownload.href = file;
    certificateFallback.href = file;
    certificateModal.classList.add("open");
    certificateModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(() => document.querySelector(".certificate-close")?.focus(), 0);
  });
});

document.querySelectorAll("[data-close-certificate]").forEach((element) => {
  element.addEventListener("click", closeCertificate);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && certificateModal?.classList.contains("open"))
    closeCertificate();
});
