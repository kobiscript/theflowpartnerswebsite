(() => {
  const root = document.querySelector(".demo-console");
  if (!root || window.__ntgDemoRoot === root) return;
  window.__ntgDemoRoot = root;

  const platforms = {
    zoom: {
      name: "Zoom",
      connection: "Customer-authorized account connection and approved access scope.",
      visible: "Participant and meeting activity that Zoom exposes to the connected environment.",
      response: "Available actions depend on host permissions, account settings, and Zoom capabilities.",
      gap: "Listening-only or externally controlled tools may require customer review.",
    },
    teams: {
      name: "Microsoft Teams",
      connection: "Tenant administrator approval and customer-selected permissions.",
      visible: "Participant and meeting events Microsoft makes available to the connected tenant.",
      response: "Available actions vary with organizer rights, tenant policy, and Microsoft capabilities.",
      gap: "Some automated activity may not appear as a conventional meeting participant.",
    },
    meet: {
      name: "Google Meet",
      connection: "Google Workspace administrator approval and an agreed evaluation scope.",
      visible: "Participant and meeting signals Google exposes to the connected workspace.",
      response: "Available actions depend on host role, workspace policy, and Google capabilities.",
      gap: "Tools operating outside exposed participant signals may need manual follow-up.",
    },
  };

  const tabs = Array.from(document.querySelectorAll("[data-platform]"));
  const fields = {
    name: document.getElementById("demo-platform-name"),
    connection: document.getElementById("demo-connection"),
    visible: document.getElementById("demo-visible"),
    response: document.getElementById("demo-response"),
    gap: document.getElementById("demo-gap"),
  };

  function selectPlatform(key, focus = false) {
    const platform = platforms[key];
    if (!platform) return;
    tabs.forEach((tab) => {
      const selected = tab.dataset.platform === key;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    });
    Object.keys(fields).forEach((field) => {
      if (fields[field]) fields[field].textContent = platform[field];
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectPlatform(tab.dataset.platform));
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const next = (index + direction + tabs.length) % tabs.length;
      selectPlatform(tabs[next].dataset.platform, true);
    });
  });

  selectPlatform("teams");
})();
