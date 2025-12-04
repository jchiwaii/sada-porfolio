export const featureFlags = {
    "claude-haiku-4.5": {
        enabled: true,
        audience: "all-clients",
        rollout: 1,
        notes: "Requested rollout: Enable Claude Haiku 4.5 for all clients."
    }
};

export type FeatureName = keyof typeof featureFlags;

export function isFeatureEnabled(name: FeatureName) {
    return featureFlags[name]?.enabled ?? false;
}
