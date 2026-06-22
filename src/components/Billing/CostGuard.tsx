import {
    Shield,
    TriangleAlert,
    Check,
    ArrowRight,
} from "lucide-react";

export default function CostGuard() {
    const scans = [
        {
            name: "Prompt Overuse",
            status: "Risk Detected",
            cost: "+₹2,240",
            danger: true,
        },
        {
            name: "Workflow Efficiency",
            status: "Stable",
            cost: "-₹840",
            danger: false,
        },
        {
            name: "Export Optimization",
            status: "Protected",
            cost: "-₹1,920",
            danger: false,
        },
    ];

    return (
        <section
            className="
      relative
      mt-8
      overflow-hidden
      rounded-[36px]
      border
      border-slate-200
      bg-white
      p-8
      shadow-sm
    "
        >
            {/* Ambient Glow */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />

            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-70" />

            {/* Ambient Gradient */}

            <div
                className=" absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,.12),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(168,85,247,.08),transparent_40%)]"
            />

            <div className="relative z-10">

                {/* Header */}

                <div className="mb-14">

                    <div
                        className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white
            px-5
            py-2
            text-sm
            font-semibold
            text-indigo-600
            shadow-sm
          "
                    >
                        <Shield size={16} />

                        Cost Guard AI
                    </div>

                    <h2
                        className="
            mt-6
            max-w-4xl
            text-4xl
            font-bold
            tracking-tight
            text-slate-900
          "
                    >
                        Your AI budget under active protection
                    </h2>

                    <p
                        className="
            mt-4
            max-w-2xl
            text-lg
            text-slate-500
          "
                    >
                        Continuous scanning detects unnecessary spending and recommends optimizations automatically.
                    </p>

                </div>

                {/* Protected Spend */}

                <div
                    className="
          overflow-hidden

          rounded-[36px]

          border
          border-white

          bg-white/70

          backdrop-blur-xl

          shadow-[0_40px_120px_rgba(0,0,0,.06)]
        "
                >

                    <div
                        className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-6
            p-8
          "
                    >

                        <div>

                            <p className="text-sm text-slate-500">
                                Protected Spend
                            </p>

                            <h3
                                className="
                mt-3
                text-5xl
                lg:text-6xl
                font-bold
                tracking-tight
                text-slate-900
              "
                            >
                                ₹18,420
                            </h3>

                        </div>

                        <div
                            className="
              rounded-full
              bg-emerald-100
              px-6
              py-3
              text-sm
              font-semibold
              text-emerald-700
            "
                        >
                            11% Saved
                        </div>

                    </div>

                </div>

                {/* Scanner */}

                <div className="mt-10 space-y-5">

                    {scans.map((item) => (

                        <div
                            key={item.name}

                            className="
              group

              relative

              overflow-hidden

              rounded-[30px]

              border

              border-slate-100

              bg-white/80

              backdrop-blur-xl

              shadow-sm

              transition-all

              duration-500

              hover:-translate-y-1

              hover:shadow-[0_20px_60px_rgba(99,102,241,.12)]
            "
                        >

                            {/* Side Indicator */}

                            <div
                                className={`
                absolute
                left-0
                top-0
                h-full
                w-1.25

                ${item.danger
                                        ? "bg-rose-500"
                                        : "bg-emerald-500"
                                    }
              `}
                            />

                            {/* Scanner Beam */}

                            <div
                                className="
                absolute

                left-[-30%]

                top-0

                h-full

                w-[40%]

                bg-linear-to-r

                from-transparent

                via-indigo-100

                to-transparent

                opacity-0

                duration-1800

                group-hover:translate-x-[320%]

                group-hover:opacity-100
              "
                            />

                            <div
                                className="
                relative

                z-10

                flex

                flex-wrap

                items-center

                justify-between

                gap-5

                p-7
              "
                            >

                                <div className="flex items-center gap-5">

                                    <div
                                        className={`
                    rounded-2xl

                    p-4

                    ${item.danger
                                                ? "bg-rose-50 text-rose-500"
                                                : "bg-emerald-50 text-emerald-500"
                                            }
                  `}
                                    >

                                        {item.danger ? (
                                            <TriangleAlert size={22} />
                                        ) : (
                                            <Check size={22} />
                                        )}

                                    </div>

                                    <div>

                                        <h4
                                            className="
                      text-lg
                      font-semibold
                      text-slate-900
                    "
                                        >
                                            {item.name}
                                        </h4>

                                        <p className="mt-1 text-slate-500">
                                            {item.status}
                                        </p>

                                    </div>

                                </div>

                                <div
                                    className={`
                  text-3xl
                  font-bold

                  ${item.danger
                                            ? "text-rose-500"
                                            : "text-emerald-600"
                                        }
                `}
                                >
                                    {item.cost}
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Footer */}

                <div
                    className="
          mt-10

          flex

          flex-wrap

          items-center

          justify-between

          gap-6

          rounded-4xl

          bg-slate-900

          p-8

          text-white
        "
                >

                    <div>

                        <p className="text-sm text-white/60">
                            Next Optimization Window
                        </p>

                        <h3
                            className="
              mt-2
              text-3xl
              font-bold
            "
                        >
                            Tomorrow • 08:30 AM
                        </h3>

                    </div>

                    <button
                        className="
            group

            rounded-full

            bg-white

            px-8

            py-4

            font-semibold

            text-slate-900

            transition

            hover:scale-[1.03]
          "
                    >

                        <div className="flex items-center gap-3">

                            Review Savings

                            <ArrowRight
                                className="
                transition
                group-hover:translate-x-1
              "
                            />

                        </div>

                    </button>

                </div>

            </div>
        </section>
    );
}