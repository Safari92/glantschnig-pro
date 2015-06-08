Vagrant.configure("2") do |config|
    # VirtualBox Settings: Just 256MB Memory
    config.vm.provider :virtualbox do |vb|
        vb.customize ["modifyvm", :id, "--memory", "256"]
    end

  # Base Image: CentOS 7.0 x86_64
  config.vm.box = "chef/centos-7.0"

  # Use Vagrant's default insecure key (~/.vagrant.d/insecure_private_key)
  config.ssh.insert_key = false

  # Setup the ip-addresses and port bindings
  config.vm.network :private_network, ip: "10.0.0.10"

  # Map project directory
  config.vm.synced_folder ".", "/server/glantschnig-pro"

  # Provisioning Shell Script
  config.vm.provision :shell, :path => "Vagrant-setup/app-setup.sh"

end
