export const formatTimeAgo = (date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} segundos atrás`;
  } else if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)} minutos atrás`;
  } else if (diffInSeconds < 86400) {
    return `${Math.floor(diffInSeconds / 3600)} horas atrás`;
  } else if (diffInSeconds < 604800) {
    return `${Math.floor(diffInSeconds / 86400)} dias atrás`;
  } else {
    return `${Math.floor(diffInSeconds / 604800)} semanas atrás`;
  }
};
