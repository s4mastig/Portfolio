import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    // hiddenField: ''
  }

  namePlaceholder = 'Your name goes here';
  emailPlaceholder = 'your.email@example.com';
  messagePlaceholder = 'Your message here...';

  nameError = false;
  emailError = false;
  messageError = false;
  checkboxError = false;

  isChecked = false;

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  checkNameFieldStatus(field: any) {
    if (field.value === '') {
      this.namePlaceholder = 'Oops! It seems your name is missing';
      this.nameError = true;
    }
  }

  checkEmailFieldStatus(field: any) {
    if (field.value === '') {
      this.emailPlaceholder = 'Hoppla! Your email is required';
      this.emailError = true;
    }
  }

  checkMessageFieldStatus(field: any) {
    if (field.value === '') {
      this.messagePlaceholder = 'What do you need to develop?';
      this.messageError = true;
    }
  }

  onSubmit(ngForm: NgForm) {

    this.checkboxError = false;

    // Formularvalidierung
    if (ngForm.invalid) {
      // Validierung für den Namen
      if (this.contactData.name === '') {
        this.namePlaceholder = 'Oops! It seems your name is missing';
        this.nameError = true; // Fehler setzen
      } else if (this.hasInvalidCharacters(this.contactData.name)) {
        this.contactData.name = ''; // Eingabewert zurücksetzen
        this.namePlaceholder = 'Yikes! Only letters and spaces, please!';
        this.nameError = true; // Fehler setzen
      } else if (!this.hasTwoWords(this.contactData.name)) {
        this.contactData.name = ''; // Eingabewert zurücksetzen
        this.namePlaceholder = 'I think your name could use a buddy!';
        this.nameError = true; // Fehler setzen
      } else {
        this.nameError = false; // Kein Fehler, falls alles in Ordnung ist
      }

      // Validierung für die E-Mail
      if (this.contactData.email === '') {
        this.emailPlaceholder = 'Hoppla! Your email is required';
        this.emailError = true;
      } else if (ngForm.controls['email']?.invalid || ngForm.controls['email']?.errors?.['pattern']) {
        this.contactData.email = ''; // Eingabewert zurücksetzen
        this.emailPlaceholder = 'Uh-oh! That email doesn’t seem quite right!'; // Placeholder ändern
        this.emailError = true;
      } else {
        this.emailError = false;
      }

      // Validierung für die Nachricht
      if (this.contactData.message === '') {
        this.messagePlaceholder = 'What do you need to develop?';
        this.messageError = true;
      } else if (this.contactData.message.length < 30) {
        this.contactData.message = ''; // Eingabewert zurücksetzen
        this.messagePlaceholder = 'Can you share a bit more? (min 30 characters)'; // Placeholder ändern
        this.messageError = true;
      } else {
        this.messageError = false;
      }

      return; // Stoppe hier die Ausführung, da das Formular ungültig ist
    }

    if (!this.isChecked) {
      this.checkboxError = true;
      console.log(this.checkboxError); // Fehler setzen, wenn die Checkbox nicht ausgewählt ist
      return; // Stoppe hier die Ausführung, da die Checkbox nicht ausgewählt ist
    }

    // Wenn das Formular gültig ist, wird die HTTP-Anfrage gesendet
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // Hier kannst du zusätzliche Logik hinzufügen, wenn das Post erfolgreich war
            ngForm.resetForm(); // Leert die Form
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // Wenn das Mail-Test-Flag aktiv ist
      ngForm.resetForm(); // Leert die Form
    }
  }

  hasTwoWords(value: string): boolean {
    return value.trim().split(/\s+/).length >= 2;
  }

  hasInvalidCharacters(name: string): boolean {
    // Überprüft, ob der Name ungültige Zeichen enthält
    return /[^a-zA-Z\s-]/.test(name);
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);
}

onCheckboxChange() {
  // Hier kannst du zusätzliche Logik hinzufügen, wenn nötig
  this.checkboxError = false;
  console.log(this.checkboxError); // Setze den Fehler zurück, wenn der Benutzer das Häkchen setzt
}

}
