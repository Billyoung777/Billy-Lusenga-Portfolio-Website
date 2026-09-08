# Enterprise Network Lab — Quick Reference

## VLANs

| VLAN | Name | Gateway | Network |
|---:|---|---|---|
| 10 | MANAGEMENT | 10.10.10.1 | 10.10.10.0/24 |
| 20 | SERVERS | 10.10.20.1 | 10.10.20.0/24 |
| 30 | IT-ADMIN | 10.10.30.1 | 10.10.30.0/24 |
| 40 | USERS | 10.10.40.1 | 10.10.40.0/24 |
| 50 | PRINTERS | 10.10.50.1 | 10.10.50.0/24 |
| 60 | CORP-WIFI | 10.10.60.1 | 10.10.60.0/24 |
| 70 | GUEST-WIFI | 10.10.70.1 | 10.10.70.0/24 |

## Known hosts

- DC01 — 10.10.20.10
- FS01 — 10.10.20.20
- Intranet — 10.10.20.20
- Printer PR01 — 10.10.50.10
- PC-IT01 — DHCP, observed 10.10.30.100/101 during testing
- PC-IT02 — 10.10.30.100 in one documented test state
- PC-USER01 — 10.10.40.101
- PC-USER03 — 10.10.40.102
- PC-USER04 — 10.10.40.103
- Corporate Wi-Fi client — 10.10.60.100
- Guest Wi-Fi client — tested against 10.10.70.1

## DNS records

- dc01.technexus.local → 10.10.20.10
- fs01.technexus.local → 10.10.20.20
- intranet.technexus.local → 10.10.20.20

## Important lesson

When Packet Tracer rejects a command or a `show` command, check the current CLI mode first. Configuration commands use `(config)#` or a sub-mode; operational `show` commands generally belong at the privileged `#` prompt.
