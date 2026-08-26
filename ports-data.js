// Shared source of truth for both game.html and flashcards.html.
// Edit ports here and both pages stay in sync.
const PORTS = [
  { port: "20", label: "FTP", protocol: "File Transfer Protocol", purpose: "Make files available for download across a network (data connection port)" },
  { port: "21", label: "FTP", protocol: "File Transfer Protocol", purpose: "Make files available for download across a network (control connection port)" },
  { port: "22", label: "SSH", protocol: "Secure Shell", purpose: "Make a secure connection to the command-line interface of a server" },
  { port: "23", label: "Telnet", protocol: "Telnet", purpose: "Make an unsecure connection to the command-line interface of a server" },
  { port: "25", label: "SMTP", protocol: "Simple Mail Transfer Protocol", purpose: "Transfer email messages across a network" },
  { port: "53", label: "DNS", protocol: "Domain Name System", purpose: "Facilitate identification of hosts by name alongside IP addressing" },
  { port: "67", label: "DHCP", protocol: "Dynamic Host Configuration Protocol", purpose: "Provision an IP address configuration to clients" },
  { port: "68", label: "DHCP", protocol: "Dynamic Host Configuration Protocol", purpose: "Request a dynamic IP address configuration from a server" },
  { port: "80", label: "HTTP", protocol: "HyperText Transfer Protocol", purpose: "Provision unsecure websites and web services" },
  { port: "110", label: "POP3", protocol: "Post Office Protocol", purpose: "Retrieve email messages from a server mailbox" },
  { port: "137-139", label: "NetBIOS", protocol: "NetBIOS over TCP/IP", purpose: "Support networking features of legacy Windows versions" },
  { port: "143", label: "IMAP", protocol: "Internet Message Access Protocol", purpose: "Read and manage mail messages on a server mailbox" },
  { port: "389", label: "LDAP", protocol: "Lightweight Directory Access Protocol", purpose: "Query information about network users and resources" },
  { port: "443", label: "HTTPS", protocol: "HTTP Secure", purpose: "Provision secure websites and services" },
  { port: "445", label: "SMB", protocol: "Server Message Block", purpose: "Implement Windows-compatible file and printer sharing on a local network (also called CIFS)" },
  { port: "3389", label: "RDP", protocol: "Remote Desktop Protocol", purpose: "Make a secure connection to the graphical desktop of a computer" },
];
