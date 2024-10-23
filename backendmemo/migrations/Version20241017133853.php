<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241017133853 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create users table and messenger messages with additional fields (status, phone, birthdate, hobbies, slogan, role)';
    }

    public function up(Schema $schema): void
    {
        // Create the users table only if it doesn't exist, with additional fields
        $this->addSql('CREATE TABLE IF NOT EXISTS users (
            id SERIAL NOT NULL,
            email VARCHAR(180) NOT NULL UNIQUE,
            name VARCHAR(100) NOT NULL,
            lastname VARCHAR(100) NOT NULL,
            password VARCHAR(255) NOT NULL,
            status VARCHAR(50) NOT NULL DEFAULT \'active\', -- Status field (active, inactive)
            phone VARCHAR(15) DEFAULT NULL, -- Phone field (optional)
            birthdate DATE DEFAULT NULL, -- Birthdate field
            hobbies VARCHAR(255) DEFAULT NULL, -- Hobbies field (optional)
            slogan VARCHAR(255) DEFAULT NULL, -- Slogan field (optional)
            role VARCHAR(50) NOT NULL DEFAULT \'user\', -- Role field (admin or user)
            PRIMARY KEY(id)
        )');

        // Create the messenger messages table
        $this->addSql('CREATE TABLE messenger_messages (
            id BIGSERIAL NOT NULL,
            body TEXT NOT NULL,
            headers TEXT NOT NULL,
            queue_name VARCHAR(190) NOT NULL,
            created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
            available_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
            delivered_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL,
            PRIMARY KEY(id)
        )');

        // Create necessary indices and triggers for messenger messages
        $this->addSql('CREATE INDEX IDX_75EA56E0FB7336F0 ON messenger_messages (queue_name)');
        $this->addSql('CREATE INDEX IDX_75EA56E0E3BD61CE ON messenger_messages (available_at)');
        $this->addSql('CREATE INDEX IDX_75EA56E016BA31DB ON messenger_messages (delivered_at)');

        $this->addSql('CREATE OR REPLACE FUNCTION notify_messenger_messages() RETURNS TRIGGER AS $$
            BEGIN
                PERFORM pg_notify(\'messenger_messages\', NEW.queue_name::text);
                RETURN NEW;
            END;
        $$ LANGUAGE plpgsql;');

        $this->addSql('DROP TRIGGER IF EXISTS notify_trigger ON messenger_messages;');
        $this->addSql('CREATE TRIGGER notify_trigger AFTER INSERT OR UPDATE ON messenger_messages FOR EACH ROW EXECUTE PROCEDURE notify_messenger_messages();');
    }

    public function down(Schema $schema): void
    {
        // Drop messenger messages table and associated trigger
        $this->addSql('DROP TRIGGER IF EXISTS notify_trigger ON messenger_messages;');
        $this->addSql('DROP TABLE IF EXISTS messenger_messages;');

        // Drop users table if it exists
        $this->addSql('DROP TABLE IF EXISTS users;');
    }
}
