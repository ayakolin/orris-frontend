export function formatHostPort(host: string | undefined, port: number | undefined): string {
  const trimmedHost = host?.trim() || '';
  const normalizedHost =
    trimmedHost && trimmedHost.includes(':') && !trimmedHost.startsWith('[')
      ? `[${trimmedHost}]`
      : trimmedHost;
  const normalizedPort = port && port > 0 ? `:${port}` : '';

  if (!normalizedHost && !normalizedPort) {
    return '-';
  }

  return `${normalizedHost}${normalizedPort}`;
}

export function formatListenAddress(
  listenIp: string | undefined,
  listenPort: number | undefined,
  fallbackHost?: string,
): string {
  return formatHostPort(listenIp?.trim() || fallbackHost, listenPort);
}
