$conns = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
foreach ($c in $conns) {
  try {
    Stop-Process -Id $c.OwningProcess -Force -ErrorAction SilentlyContinue
    Write-Output "killed port3000 pid=$($c.OwningProcess)"
  } catch {}
}
$procs = Get-CimInstance Win32_Process -Filter "name='node.exe'"
foreach ($p in $procs) {
  if ($p.CommandLine -and ($p.CommandLine -match 'E:\\WEB\\MASTER|E:/WEB/MASTER|next dev|prisma')) {
    $snippet = $p.CommandLine.Substring(0, [Math]::Min(140, $p.CommandLine.Length))
    Write-Output ("kill {0} {1}" -f $p.ProcessId, $snippet)
    try { Stop-Process -Id $p.ProcessId -Force -ErrorAction SilentlyContinue } catch {}
  }
}
Write-Output 'done'
