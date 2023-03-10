<?php


namespace Composer\Autoload;

class ComposerStaticInitd359baac21f520c04e608f4eed750560
{
    public static $prefixLengthsPsr4 = array (
        'G' => 
        array (
            'Gregwar\\Captcha\\' => 16,
        ),
        'F' => 
        array (
            'FormGuide\\PHPFormValidator\\' => 27,
            'FormGuide\\Handlx\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Gregwar\\Captcha\\' => 
        array (
            0 => __DIR__ . '/..' . '/gregwar/captcha',
        ),
        'FormGuide\\PHPFormValidator\\' => 
        array (
            0 => __DIR__ . '/..' . '/FormGuide/PHPFormValidator/src',
        ),
        'FormGuide\\Handlx\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'EasyPeasyICS' => __DIR__ . '/..' . '/phpmailer/phpmailer/extras/EasyPeasyICS.php',
        'PHPMailer' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmailer.php',
        'PHPMailerOAuth' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmaileroauth.php',
        'PHPMailerOAuthGoogle' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmaileroauthgoogle.php',
        'POP3' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.pop3.php',
        'SMTP' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.smtp.php',
        'ntlm_sasl_client_class' => __DIR__ . '/..' . '/phpmailer/phpmailer/extras/ntlm_sasl_client.php',
        'phpmailerException' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmailer.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd359baac21f520c04e608f4eed750560::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd359baac21f520c04e608f4eed750560::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd359baac21f520c04e608f4eed750560::$classMap;

        }, null, ClassLoader::class);
    }
}
