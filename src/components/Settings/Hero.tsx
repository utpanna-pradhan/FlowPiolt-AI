import {
  User,
  Sparkles,
  Shield,
  PenSquare,
  Bell,
  Palette,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white p-8">

      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />

      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-70" />

      {/* Texture */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        bg-[radial-gradient(circle,#000_1px,transparent_1px)]
        bg-size-[22px_22px]
      "
      />

      <div className="relative z-10">

        {/* HERO */}
        <div
          className="
          mb-14
          grid
          gap-10
          xl:grid-cols-[1.3fr_0.8fr]
        "
        >

          {/* LEFT */}
          <div>

            <div className="flex flex-col md:flex-row gap-8">

              {/* Avatar */}
              <div className="relative shrink-0">

                <div className="absolute inset-0 rounded-full bg-indigo-300 blur-3xl opacity-30" />

                <div
                  className="
                  relative
                  flex
                  h-36
                  w-36
                  items-center
                  justify-center
                  rounded-full
                  bg-linear-to-br
                  from-indigo-600
                  to-violet-600
                  text-white
                  shadow-[0_40px_120px_rgba(99,102,241,.35)]
                "
                >
                  <User size={56} />
                </div>

              </div>

              {/* Content */}
              <div className="min-w-0">

                <div
                  className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-indigo-50
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-indigo-600
                "
                >
                  <Sparkles size={16} />
                  Profile Command Center
                </div>

                <h1
                  className="
                  mt-6
                  text-4xl
                  md:text-5xl
                  font-bold
                  tracking-tight
                  text-slate-900
                "
                >
                  Utpanna Pradhan
                </h1>

                <p
                  className="
                  mt-4
                  max-w-xl
                  text-lg
                  text-slate-500
                "
                >
                  Frontend Developer • Workspace Owner
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <div className="rounded-full bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-600">
                    Protected
                  </div>

                  <div className="rounded-full bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-600">
                    Mumbai Region
                  </div>

                  <div className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold">
                    Last active 2m ago
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div
            className="
            rounded-[36px]
            border
            border-white
            bg-white/70
            p-6
            backdrop-blur-xl
            shadow-[0_25px_80px_rgba(0,0,0,.06)]
          "
          >

            <div className="grid grid-cols-2 gap-4">

              {[
                {
                  icon: PenSquare,
                  label: "Edit Profile",
                },
                {
                  icon: Bell,
                  label: "Notifications",
                },
                {
                  icon: Palette,
                  label: "Appearance",
                },
                {
                  icon: Shield,
                  label: "Security",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    className="
                    group
                    rounded-[28px]
                    bg-slate-50
                    p-6
                    text-left
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                    hover:shadow-lg
                  "
                  >
                    <Icon />

                    <p className="mt-10 font-semibold">
                      {item.label}
                    </p>

                  </button>
                );
              })}

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[30px] bg-slate-50 p-8">

            <p className="text-sm text-slate-500">
              Workspace ID
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              FP-240621
            </h3>

          </div>

          <div className="rounded-[30px] bg-slate-50 p-8">

            <p className="text-sm text-slate-500">
              Profile Completion
            </p>

            <h3 className="mt-4 text-4xl font-bold">
              94%
            </h3>

          </div>

          <div
            className="
            group
            rounded-[30px]
            bg-linear-to-br
            from-indigo-600
            to-violet-600
            p-8
            text-white
          "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-white/70">
                  Setting Health
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  Excellent
                </h3>

              </div>

              <ChevronRight
                className="
                transition
                group-hover:translate-x-1
              "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}