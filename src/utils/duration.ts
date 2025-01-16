export const formatDuration = (durationInHours: number) => {
    const hours = Math.floor(durationInHours);
    const minutes = Math.round((durationInHours - hours) * 60);

    let formattedDuration = "";

    if (hours > 0) {
        formattedDuration += `${hours}H`;
    }

    if (minutes > 0 || hours === 0) {
        formattedDuration += `${minutes}M`;
    }

    return formattedDuration;
}
