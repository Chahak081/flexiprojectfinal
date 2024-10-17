output "admin_username" {
  value = var.admin_username
}

output "vm_ip_address" {
  value = azurerm_network_interface.nic.private_ip_address
}