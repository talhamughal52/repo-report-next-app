const assets = {
  // logo: "/logo.png",
  logo: "/logo_red.png",
  search: "/search.svg",
  slack: "/slack.svg",
  notification: "/notification.svg",
  setting: "/setting.svg",
  profile: "/profile.png",
  dashboard: "/dashboard.svg",
  lending: "/lending.svg",
  insights: "/insights.svg",
  accounting: "/accounting.svg",
  payments: "/payments.svg",
  xeroBadge: "/xero-badge.svg",
  xeroLogo: "/xero-logo.png",
};

const navigation = [
  { label: "Dashboard", icon: assets.dashboard },
  { label: "Lending", icon: assets.lending, active: true },
  { label: "Insights", icon: assets.insights },
  { label: "Accounting", icon: assets.accounting },
  { label: "Payments", icon: assets.payments },
];

const lendingLinks = [
  { label: "My Offers" },
  { label: "Application", active: true },
  { label: "Repayment Calculator" },
  { label: "My Score" },
];

const applicationRows = [
  {
    product: "Asset or Equipment",
    amount: "$779.58",
    status: "Approved",
    repayment: "$30.58",
  },
  {
    product: "Business Loan",
    amount: "$779.58",
    status: "Approved",
    repayment: "$30.58",
  },
  {
    product: "Business Loan",
    amount: "$779.58",
    status: "Approved",
    repayment: "$30.58",
  },
];

const submittedApplications = [
  {
    product: "Asset or Equipment",
    date: "Apr 24, 2021",
    status: "Pending",
    amount: "$779.58",
  },
  {
    product: "Day-to-Day Cash",
    date: "Apr 24, 2021",
    status: "Pending",
    amount: "$1200.00",
  },
  {
    product: "Asset or Equipment",
    date: "Apr 24, 2021",
    status: "Pending",
    amount: "$490.51",
  },
];

const creditRows = [
  { name: "Cube Land", invoices: "$779.58", approved: "$30.58" },
  { name: "Cube Land", invoices: "$782.01", approved: "$782.01" },
  { name: "Cube Land", invoices: "$105.55", approved: "$105.55" },
  { name: "Cube Land", invoices: "$105.58", approved: "$105.58" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#edf1f9] font-sans text-[#2d405a]">
      <div className="mx-auto flex overflow-hidden rounded-[30px] bg-white shadow-[0_28px_45px_rgba(84,101,165,0.08)]">
        {/* <aside className="flex w-[240px] flex-col justify-between bg-gradient-to-b from-[#05053e] via-[#08197a] to-[#041364] px-6 py-8 text-white"> */}
        <aside className="flex w-[240px] flex-col justify-between bg-gradient-to-b from-[#ea3332] via-[#8b1e3f] to-[#8b1e3f] px-6 py-8 text-white">
          <div className="space-y-8">
            <div className="flex items-center gap-2 justify-center">
              <div className="rounded-xl bg-white/50 backdrop-blur-sm p-2">
                <img
                  alt="Jifie"
                  src={assets.logo}
                  className="h-20 [filter:drop-shadow(0_0_10px_white)] drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                />
              </div>
            </div>
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${
                    item.active
                      ? "bg-white/10 font-medium text-white"
                      : "text-[#c4cefe] hover:bg-white/5"
                  }`}
                >
                  <img alt="" src={item.icon} className="h-5 w-5" />
                  <span>{item.label}</span>
                  {item.active && (
                    <span className="ml-auto text-xs font-semibold text-[#8addc1]">
                      •
                    </span>
                  )}
                </div>
              ))}
            </nav>
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#93a0ff]">
                Lending
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {lendingLinks.map((item) => (
                  <li
                    key={item.label}
                    className={`flex items-center justify-between ${
                      item.active
                        ? "font-semibold text-white"
                        : "text-[#c4cefe] hover:text-white/80"
                    }`}
                  >
                    {item.label}
                    {item.active && (
                      <span className="inline-flex items-center justify-center rounded-full bg-[#8addc1] px-2 py-0.5 text-[10px] font-semibold text-[#1e3d52]">
                        Active
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#93a0ff]">
                Company
              </p>
              <div className="mt-3 space-y-5 rounded-2xl bg-white/10 p-5">
                <div className="flex items-center gap-3 border-b border-white/20 pb-3">
                  <div className="relative h-8 w-8">
                    <img
                      alt=""
                      src={assets.xeroBadge}
                      className="absolute inset-0 h-full w-full"
                    />
                    <img
                      alt="Xero"
                      src={assets.xeroLogo}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Xmirror</p>
                    <p className="text-xs text-[#c4cefe]">Xero</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-[#ffb454] px-3 py-2 text-xs font-semibold text-[#2d405a] transition hover:bg-[#ffa12d]">
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-white text-sm font-bold text-[#ffa12d]">
                    +
                  </span>
                  Invite member
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl bg-white/5 p-4 text-xs text-[#c4cefe]">
              <p className="font-semibold text-white">Need Help?</p>
              <p className="mt-1 opacity-70">
                Chat with our support team for quick assistance.
              </p>
            </div>
            <p className="text-xs text-[#c4cefe]/70">Jifie 2021</p>
          </div>
        </aside>

        <main className="flex-1 bg-[#f5f6fa] px-10 py-10">
          <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-[26px] font-semibold tracking-tight">
              Application
            </h1>
            <div className="flex flex-1 flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <img
                    alt=""
                    src={assets.search}
                    className="h-5 w-5 opacity-60"
                  />
                </span>
                <input
                  className="w-full rounded-full border border-transparent bg-white py-3 pl-11 pr-4 text-sm text-[#56606d] shadow-sm outline-none transition placeholder:text-[#99a6b9] focus:border-[#93a0ff] focus:ring-2 focus:ring-[#93a0ff]/40"
                  placeholder="Search anything"
                />
              </div>
              <button className="flex items-center gap-2 self-start rounded-xl bg-[#f8f8f8] px-4 py-2 text-sm font-semibold text-[#2d405a] shadow-sm transition hover:bg-[#e9ecf5] lg:self-auto">
                <img alt="" src={assets.slack} className="h-4 w-4" />
                Add to Slack
              </button>
              <div className="flex items-center gap-4">
                <button className="relative rounded-full bg-white p-3 shadow-sm transition hover:shadow">
                  <img alt="" src={assets.notification} className="h-5 w-5" />
                  <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#f64e60] px-1 text-[10px] font-semibold text-white">
                    4
                  </span>
                </button>
                <button className="relative rounded-full bg-white p-3 shadow-sm transition hover:shadow">
                  <img alt="" src={assets.setting} className="h-5 w-5" />
                  <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#ffa800] px-1 text-[10px] font-semibold text-white">
                    2
                  </span>
                </button>
                <span className="h-8 w-px bg-[#2d405a]/10" />
                <div className="flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-sm">
                  <img
                    alt="Oleo Bone"
                    src={assets.profile}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-medium text-[#99a6b9]">Hello</p>
                    <p className="text-sm font-semibold text-[#2d405a]">
                      Oleo Bone
                    </p>
                  </div>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#99a6b9]"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </header>

          <section className="mt-10 grid gap-6 xl:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <div className="flex flex-col justify-between gap-6 rounded-3xl bg-white px-8 py-6 shadow-sm lg:flex-row lg:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#e8f7f0]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#2d405a]"
                    >
                      <path
                        d="M12 3L4 9V21H9V15H15V21H20V9L12 3Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#2d405a]">
                      Application for Loan
                    </p>
                    <p className="text-sm text-[#79828d]">
                      Just send us an application for loan.
                    </p>
                  </div>
                </div>
                <button className="self-start rounded-xl bg-[#8addc1] px-6 py-3 text-sm font-semibold text-[#2d405a] transition hover:bg-[#75d0b4] lg:self-auto">
                  Submit Application
                </button>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-lg font-semibold text-[#2d405a]">
                    Applications
                  </p>
                  <button className="flex items-center gap-2 rounded-lg border border-[#dfe3eb] px-3 py-2 text-xs font-medium text-[#56606d] transition hover:border-[#bfc6d3]">
                    Approved
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl border border-[#f0f1f6]">
                  <table className="min-w-full divide-y divide-[#f0f1f6] text-left text-sm text-[#56606d]">
                    <thead className="bg-[#fafbfe] text-xs font-semibold uppercase tracking-[0.2em] text-[#99a6b9]">
                      <tr>
                        <th className="px-6 py-3">Product Type</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Repayment</th>
                        <th className="px-6 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f0f1f6] text-sm">
                      {applicationRows.map((row, index) => (
                        <tr key={row.product + index} className="bg-white">
                          <td className="px-6 py-4 font-medium text-[#2d405a]">
                            {row.product}
                          </td>
                          <td className="px-6 py-4">{row.amount}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center rounded-md bg-[#dbf5e7] px-3 py-1 text-xs font-semibold text-[#12ca9e]">
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">{row.repayment}</td>
                          <td className="px-6 py-4">
                            <button className="rounded-lg border border-[#dfe3eb] px-4 py-2 text-xs font-semibold text-[#56606d] transition hover:border-[#bfc6d3]">
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#99a6b9]">
                      Line of Credit
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-[#2d405a]">
                      $50,000
                    </p>
                  </div>
                  <button className="self-start rounded-xl bg-[#8addc1] px-6 py-3 text-sm font-semibold text-[#2d405a] transition hover:bg-[#75d0b4] sm:self-auto">
                    Uses History
                  </button>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl border border-[#f0f1f6]">
                  <table className="min-w-full divide-y divide-[#f0f1f6] text-left text-sm text-[#56606d]">
                    <thead className="bg-[#fafbfe] text-xs font-semibold uppercase tracking-[0.2em] text-[#99a6b9]">
                      <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Invoices</th>
                        <th className="px-6 py-3">Approved</th>
                        <th className="px-6 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f0f1f6] text-sm">
                      {creditRows.map((row, index) => (
                        <tr key={row.name + index} className="bg-white">
                          <td className="px-6 py-4 font-medium text-[#2d405a]">
                            {row.name}
                          </td>
                          <td className="px-6 py-4">{row.invoices}</td>
                          <td className="px-6 py-4">{row.approved}</td>
                          <td className="px-6 py-4 text-right">
                            <button className="rounded-lg border border-[#dfe3eb] px-4 py-2 text-xs font-semibold text-[#56606d] transition hover:border-[#bfc6d3]">
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-lg font-semibold text-[#2d405a]">
                  Submitted Applications
                </p>
                <div className="mt-6 space-y-6">
                  {submittedApplications.map((app) => (
                    <div
                      key={app.product}
                      className="flex items-start justify-between"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#2d405a]">
                          {app.product}
                        </p>
                        <p className="mt-1 text-xs text-[#99a6b9]">
                          {app.date}
                        </p>
                        <span className="mt-2 inline-flex items-center rounded-md bg-[#fff4de] px-3 py-1 text-xs font-semibold text-[#ffa800]">
                          {app.status}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#2d405a]">
                        {app.amount}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#56606d] transition hover:text-[#2d405a]">
                  See all application
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M8.333 5L13.333 10L8.333 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="rounded-3xl bg-[#ea3332] p-8 text-white shadow-sm">
                <p className="text-lg font-semibold">Need a Business Loan?</p>
                <p className="mt-2 text-sm text-white/70">
                  Get quick approval and manage your finances in one place.
                </p>
                <button className="mt-6 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                  Learn more
                </button>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}
