variable "location" {
  description = "The location where the VM will be created"
  default     = "westus"
}

variable "resource_group_name" {
  description = "The name of the resource group"
  default     = "Flexi-Proj-Manager"
}

variable "vm_name" {
  description = "The name of the Virtual Machine"
  default     = "Flexi-VM"
}

variable "admin_username" {
  description = "Admin username for the VM"
  default     = "flexiadmin"
}

variable "admin_password" {
  description = "Admin password for the VM"
  sensitive   = true
}







