import { colors, radius, spacing, typography } from "@/theme";

export default function TestPage() {
  return (
    <div
      style={{
        background: colors.background,
        padding: spacing.xl,
      }}
    >
      <h1
        style={{
          color: colors.text,
          fontSize: typography.h1.fontSize,
          fontWeight: typography.h1.fontWeight,
        }}
      >
        Klio & Calendar
      </h1>

      <button
        style={{
          background: colors.primary,
          color: "white",
          padding: spacing.md,
          borderRadius: radius.md,
          border: "none",
        }}
      >
        Test Button
      </button>
    </div>
  );
}
