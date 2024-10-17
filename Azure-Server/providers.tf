provider "azurerm" {
  features {}
  subscription_id = "7a536896-db03-409d-b301-5293cf93f7fa"
  client_id       = "cb79eb64-3b42-40fc-8cf5-f5f7aba59d15"
  client_secret   = "qcC8Q~V5j1lHbIwxgOtNQsdoImiqMNKg~P4MTa6I"
  tenant_id       = "23035d1f-133c-44b5-b2ad-b3aef17baaa1"
}

terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}
