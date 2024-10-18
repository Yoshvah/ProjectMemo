<?php

// src/Entity/User.php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity()
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Assert\NotBlank
     * @Assert\Email
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank
     */
    private $lastname;

    /**
     * @ORM\Column(type="string")
     * @Assert\NotBlank
     */
    private $password;

    // Getters and Setters for the above fields...
    
    // Implement UserInterface methods

    public function getRoles(): array
    {
        // Return the roles for this user; modify as needed.
        return ['ROLE_USER'];
    }

    public function getUserIdentifier(): string
    {
        return $this->email; // You can return a unique identifier like email or username.
    }

    public function eraseCredentials(): void
    {
        // If you have any temporary, sensitive data (like plain passwords), clear them here.
        // In this example, there's nothing to clear.
    }

    // Example of Getter and Setter methods
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;
        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;
        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;
        return $this;
    }
}
